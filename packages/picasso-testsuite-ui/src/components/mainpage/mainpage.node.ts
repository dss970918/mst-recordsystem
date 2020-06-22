import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const MainPageNode = types
    .model(systemTreeIds.mainPageNode, {
        id: types.optional(types.identifier, systemTreeIds.mainPageNode),
        defaultUrl: types.string,
        defaultCommand: types.string,
        url: types.array(
            types.model({
                name: types.string,
                url: types.string,
            })
        ),
        data: types.array(
            types.model({
                key: types.string,
                command: types.string,
                target: types.string,
                value: types.string,
            })
        ),
        columns: types.array(
            types.model({
                title: types.string,
                dataIndex: types.string,
                key: types.string,
            })
        ),
    })
    .actions((self) => {
        // 当前url
        const activeUrl = (val: any) => {
            self.defaultUrl = val;
        };
        // 当前命令
        const activeCommand = (val: any) => {
            self.defaultCommand = val;
        };
        // 搜索目标
        const targetOnsearch = (val: any) => {
            console.log(val);
        };
        // 播放
        const play = () => {
            console.log('play');
        };
        // 暂停
        const suspend = () => {
            console.log('suspend');
        };
        // 录制
        const record = () => {
            console.log('record');
        };
        return {
            activeUrl,
            activeCommand,
            targetOnsearch,
            play,
            suspend,
            record,
        };
    });
