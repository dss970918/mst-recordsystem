// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { LunaContainer } from '@luna/core';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerPlayer } from '.';

const player = async (step: jtlplugin.ITestStep) => {
    switch (step.value.view) {
        case 'viewport2d':
            LunaContainer.get<any>('viewport2d.effect.viewport').viewTo2d();
            break;
        case 'viewport3d':
            LunaContainer.get<any>('viewport3d.effect.viewport').viewTo3d(step.value.cameraStatus);
            break;
        case 'viewdecade':
            LunaContainer.get<any>('viewportdecade.effect.viewport').viewToDecade();
            break;
    }
};

registerPlayer(EN_RECORD_TYPE.SWITCH_VIEW, player);
