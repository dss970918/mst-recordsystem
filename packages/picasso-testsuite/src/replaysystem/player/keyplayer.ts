// import { XpanelEditor, DebugWarn } from '@jtl/picasso-bim';
import { luna } from '@luna/core';
import { IHotkey } from '@jtl/picasso-core';
import * as _ from 'lodash';
import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { registerPlayer } from '.';
import { PLUGIN_ID_HOTKEY_MANAGER, PLUGIN_ID_HOTKEY_REGISTRY } from '../../contants/pluginids';

const player = (step: jtlplugin.ITestStep) => {
    switch (step.value.type) {
        case 'scope':
            // eslint-disable-next-line no-unused-expressions
            luna.plugin
                .get<jtlplugin.IGetter<any>>(PLUGIN_ID_HOTKEY_MANAGER)
                ?.get()
                .processScopeHotKey(step.value.hotKey);
            break;
        case 'function':
            // 我实在不知道怎么对应到hotkey的cmd回调
            // 这里只能先用丑陋的方式先实现一版了
            // 等我以后想到更好的办法再来改吧
            // by yaozhao
            const hotkeyRegistry = luna.plugin.get<jtlplugin.IGetter<any>>(PLUGIN_ID_HOTKEY_REGISTRY)?.get();
            const hotKeys: IHotkey[] = hotkeyRegistry.getAllKeys();
            const hotKey = _.find(hotKeys, (k) => k.id === step.value.hotKey.id);
            // eslint-disable-next-line no-unused-expressions
            luna.plugin
                .get<jtlplugin.IGetter<any>>(PLUGIN_ID_HOTKEY_MANAGER)
                ?.get()
                .processFunctionHotkey(hotKey);
            break;
    }
};

registerPlayer(EN_RECORD_TYPE.KEY, player);
