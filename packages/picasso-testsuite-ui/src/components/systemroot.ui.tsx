import * as React from 'react';
import { observer } from 'mobx-react';
// import { useMst } from '../store';
// import { GuideUI } from './guide/guide.ui';
import { MainPageUI } from './mainpage/mainpage.ui';
import { PageHeaderUI } from './pageheader/pageheader.ui';
import { TestCaseUI } from './testcase/tesecase.ui';
import { MenubarUI } from './menubar/menubar.ui';

export const RootUI: React.FC = observer(() => {
    return (
        <div id='system-root'>
            {/* <GuideUI /> */}
            <PageHeaderUI />
            <MainPageUI />
            <TestCaseUI />
            <MenubarUI />
        </div>
    );
});
