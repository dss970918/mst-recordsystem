import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const GuideNode = types.model(systemTreeIds.guideNode, {
    id: types.optional(types.identifier, systemTreeIds.guideNode),
});
