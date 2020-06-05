// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import { TestStep } from '../teststep';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerRecorder } from '.';
import { PLUGIN_ID_TEST_SUITE_RECORDER } from '../../contants/pluginids';

const record = () => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const handler = {
        apply: (applytarget: any, thisArgument: any, argumentsList: any) => {
            const [cmdName, cmdParam] = argumentsList;
            const testStep = TestStep.open();
            testStep.recordType = EN_RECORD_TYPE.COMMAND;
            if (cmdParam instanceof File) {
                const reader = new FileReader();
                reader.readAsDataURL(cmdParam);
                reader.onload = () => {
                    testStep.value = {
                        cmdName,
                        cmdParam: {
                            name: cmdParam.name,
                        },
                        file: reader.result,
                    };
                    // eslint-disable-next-line no-unused-expressions
                    luna.plugin
                        .get<jtlplugin.ITestSuiteRecorderPlugin>(PLUGIN_ID_TEST_SUITE_RECORDER)
                        ?.record(testStep);
                };
            } else {
                testStep.value = { cmdName, cmdParam };
                // eslint-disable-next-line no-unused-expressions
                luna.plugin.get<jtlplugin.ITestSuiteRecorderPlugin>(PLUGIN_ID_TEST_SUITE_RECORDER)?.record(testStep);
            }

            const result = applytarget.apply(thisArgument, argumentsList);

            return result;
        },
    };
    descriptor.value = new Proxy(descriptor.value, handler);
};

registerRecorder(EN_RECORD_TYPE.COMMAND, record);
