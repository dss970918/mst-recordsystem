import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const TestCaseNode = types
    .model(systemTreeIds.testCaseNode, {
        id: types.optional(types.identifier, systemTreeIds.testCaseNode),
        defaultTestCase: types.string,
        testCaseList: types.array(
            types.model({
                name: types.string,
                value: types.string,
            })
        ),
    })
    .actions((self) => {
        const activeTestCase = (val: string) => {
            self.defaultTestCase = val;
        };
        return {
            activeTestCase,
        };
    });
