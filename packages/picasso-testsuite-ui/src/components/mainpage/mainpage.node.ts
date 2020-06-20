import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const MainPageNode = types
    .model(systemTreeIds.mainPageNode, {
        id: types.optional(types.identifier, systemTreeIds.mainPageNode),
        defaultUrl: types.string,
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
    .actions((self: any) => {
        const activeUrl = (val: any) => {
            self.defaultUrl = val;
        };
        return {
            activeUrl,
        };
    });
