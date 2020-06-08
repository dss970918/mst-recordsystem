// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import * as xmath from '@jtl/xmath';
import { EN_MOUSE_EVENT_TYPE } from '@jtl/picasso-core';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerPlayer } from '.';
import { PLUGIN_ID_ACTION_MANAGER, PLUGIN_ID_API_APP } from '../../contants/pluginids';

const player = (step: jtlplugin.ITestStep) => {
    switch (step.value.mouseType) {
        case EN_MOUSE_EVENT_TYPE.WHEEL_FORWARD:
            // eslint-disable-next-line no-unused-expressions
            luna.plugin
                .get<jtlplugin.IGetter<any>>(PLUGIN_ID_API_APP)
                ?.get()
                .processMouseWheelEvent(step.value.mouseType, new xmath.Vector2(step.value.pos), step.value.fnKey);
            break;
        case EN_MOUSE_EVENT_TYPE.WHEEL_BACKWARD:
            // eslint-disable-next-line no-unused-expressions
            luna.plugin
                .get<jtlplugin.IGetter<any>>(PLUGIN_ID_API_APP)
                ?.get()
                .processMouseWheelEvent(step.value.mouseType, new xmath.Vector2(step.value.pos), step.value.fnKey);
            break;
        default:
            // eslint-disable-next-line no-unused-expressions
            luna.plugin
                .get<jtlplugin.IGetter<any>>(PLUGIN_ID_ACTION_MANAGER)
                ?.get()
                .processMouseEvent(step.value.mouseType, new xmath.Vector2(step.value.pos), step.value.fnKey);
            break;
    }
};

registerPlayer(EN_RECORD_TYPE.MOUSE, player);
