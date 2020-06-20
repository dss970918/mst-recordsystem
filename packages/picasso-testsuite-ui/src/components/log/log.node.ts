import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const logNode = types.model(systemTreeIds.logNode, {
    id: types.optional(types.identifier, systemTreeIds.logNode),
});
