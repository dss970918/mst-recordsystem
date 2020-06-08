// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import * as xmath from '@jtl/xmath';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerPlayer } from '.';
import { PLUGIN_ID_API_APP } from '../../contants/pluginids';

const player = (step: jtlplugin.ITestStep) => {
    // eslint-disable-next-line no-unused-expressions
    luna.plugin
        .get<jtlplugin.IGetter<any>>(PLUGIN_ID_API_APP)
        ?.get()
        .processMouseEvent(step.value.mouseType, new xmath.Vector2(step.value.pos), step.value.fnKey);
};

registerPlayer(EN_RECORD_TYPE.VIEW_CONTROLLER, player);
