import { createContext, useContext } from 'react';
import { Instance } from 'mobx-state-tree';
import { mstRoot } from './components/root';

export function createMST() {
    const store = mstRoot.create({
        title: 'record system',
    });
    return store;
}

type IRootInstance = Instance<typeof mstRoot>;

const RootContext = createContext<null | IRootInstance>(null);

export const { Provider } = RootContext;

export function useMst() {
    const store = useContext(RootContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}
