// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import * as xmath from '@jtl/xmath';
import { EN_MOUSE_EVENT_TYPE, FnKey } from '@jtl/picasso-core';
import { TestStep } from '../teststep';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerRecorder } from '.';
import { PLUGIN_ID_TEST_SUITE_RECORDER } from '../../contants/pluginids';

const record = () => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const handler = {
        apply: (applytarget: any, thisArgument: any, argumentsList: [EN_MOUSE_EVENT_TYPE, xmath.Vector2, FnKey]) => {
            const [mouseType, pos, fnKey] = argumentsList;

            // if (mouseType !== 'move') {
            // if (cmdParam instanceof XpanelEditor) {
            //     DebugWarn.assert(false, 'xpanel editor is not supported in recording', 'Ju', '');
            // } else {
            const testStep = TestStep.open();
            testStep.recordType = EN_RECORD_TYPE.VIEW_CONTROLLER;
            testStep.value = { mouseType, pos: pos.toXY(), fnKey };

            // eslint-disable-next-line no-unused-expressions
            luna.plugin.get<jtlplugin.ITestSuiteRecorderPlugin>(PLUGIN_ID_TEST_SUITE_RECORDER)?.record(testStep);
            // }
            // }

            const result = applytarget.apply(thisArgument, argumentsList);

            return result;
        },
    };
    descriptor.value = new Proxy(descriptor.value, handler);
};

registerRecorder(EN_RECORD_TYPE.VIEW_CONTROLLER, record);
