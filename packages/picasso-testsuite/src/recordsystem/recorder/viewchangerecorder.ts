// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import { TestStep } from '../teststep';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerRecorder } from '.';
import { PLUGIN_ID_TEST_SUITE_RECORDER } from '../../contants/pluginids';

const record = (view: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const handler = {
        apply: (applytarget: any, thisArgument: any, argumentsList: any) => {
            const [cameraStatus] = argumentsList;

            // if (cmdParam instanceof XpanelEditor) {
            //     DebugWarn.assert(false, 'xpanel editor is not supported in recording', 'Ju', '');
            // } else {
            const testStep = TestStep.open();
            testStep.recordType = EN_RECORD_TYPE.SWITCH_VIEW;
            testStep.value = { view, cameraStatus };

            // eslint-disable-next-line no-unused-expressions
            luna.plugin.get<jtlplugin.ITestSuiteRecorderPlugin>(PLUGIN_ID_TEST_SUITE_RECORDER)?.record(testStep);
            // }

            const result = applytarget.apply(thisArgument, argumentsList);

            return result;
        },
    };
    descriptor.value = new Proxy(descriptor.value, handler);
};

registerRecorder(EN_RECORD_TYPE.SWITCH_VIEW, record);
