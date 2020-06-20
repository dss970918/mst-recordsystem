import { createContext, useContext } from 'react';
import { Instance } from 'mobx-state-tree';
import { systemRoot } from './components/systemroot';
import { snapshot as mainPageSnapShot } from './test/mainpage.snapshot';
import { snapshot as testCaseSnapShot } from './test/testcase.snapshot';

export function createMST() {
    const store = systemRoot.create({
        mainPageNode: mainPageSnapShot,
        guideNode: {},
        pageHeaderNode: { projectName: '111' },
        testCaseNode: testCaseSnapShot,
        menubarNode: { current: '1' },
    });
    return store;
}

type IRootInstance = Instance<typeof systemRoot>;

const RootContext = createContext<null | IRootInstance>(null);

export const { Provider } = RootContext;

export function useMst() {
    const store = useContext(RootContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}
