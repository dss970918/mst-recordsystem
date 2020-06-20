import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const PageHeaderNode = types.model(systemTreeIds.pageHeaderNode, {
    id: types.optional(types.identifier, systemTreeIds.pageHeaderNode),
    projectName: types.string,
});
