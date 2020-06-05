// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerPlayer } from '.';
import { PLUGIN_ID_API_APP } from '../../contants/pluginids';

const player = async (step: jtlplugin.ITestStep) => {
    if (step.value.file) {
        const file = dataURLtoFile(step.value.file, step.value.cmdParam.name);
        await luna.plugin
            .get<jtlplugin.IGetter<any>>(PLUGIN_ID_API_APP)
            ?.get()
            .sendCmd(step.value.cmdName, file);
    } else {
        // eslint-disable-next-line no-unused-expressions
        await luna.plugin
            .get<jtlplugin.IGetter<any>>(PLUGIN_ID_API_APP)
            ?.get()
            .sendCmd(step.value.cmdName, step.value.cmdParam);
    }
};

registerPlayer(EN_RECORD_TYPE.COMMAND, player);

function dataURLtoFile(dataurl: string, filename: string) {
    //将base64转换为文件
    const arr = dataurl.split(',');
    // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}
