import { types } from 'mobx-state-tree';

export const mstRoot = types.model('root', {
    id: 'root',
    title: types.string,
});
