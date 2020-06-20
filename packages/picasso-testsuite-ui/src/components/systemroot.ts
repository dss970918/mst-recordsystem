import { types } from 'mobx-state-tree';
import { systemTreeIds } from './shared';
import { GuideNode } from './guide/guide.node';
import { MainPageNode } from './mainpage/mainpage.node';
import { PageHeaderNode } from './pageheader/pageheader.node';
import { TestCaseNode } from './testcase/testcase.node';
import { MenubarNode } from './menubar/menubar.node';

export const systemRoot = types.model(systemTreeIds.root, {
    id: types.optional(types.identifier, systemTreeIds.root),
    // log: logNode,
    guideNode: GuideNode,
    mainPageNode: MainPageNode,
    pageHeaderNode: PageHeaderNode,
    testCaseNode: TestCaseNode,
    menubarNode: MenubarNode,
});
