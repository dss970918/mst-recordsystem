import * as React from 'react';
import { observer } from 'mobx-react';
import { PageHeaderUI } from '../pageheader/pageheader.ui';
import { MainPageUI } from '../mainpage/mainpage.ui';
import { TestCaseUI } from '../testcase/tesecase.ui';
import { MenubarUI } from '../menubar/menubar.ui';
// import { useMst } from '../store';
// import { GuideUI } from './guide/guide.ui';
// import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

export const SystemUI: React.FC = observer(() => {
    return (
        <div id='system-page'>
            <div className='head'>
                <PageHeaderUI />
            </div>
            <div className='content'>
                <MainPageUI />
                <TestCaseUI />
            </div>
            <div className='foot'>
                <MenubarUI />
            </div>
        </div>
    );
});
