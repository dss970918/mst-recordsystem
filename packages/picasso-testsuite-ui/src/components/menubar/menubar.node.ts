import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const MenubarNode = types
    .model(systemTreeIds.menubarNode, {
        id: types.optional(types.identifier, systemTreeIds.menubarNode),
        current: types.string,
    })
    .actions((self) => {
        const handleClick = (val: string) => {
            self.current = val;
        };
        return {
            handleClick,
        };
    });
