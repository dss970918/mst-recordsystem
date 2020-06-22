import * as React from 'react';
import { observer } from 'mobx-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { GuideUI } from './guide/guide.ui';
import { SystemUI } from './system/system.ui';

export const RootUI: React.FC = observer(() => {
    return (
        <div id='system-root'>
            <HashRouter>
                <Switch>
                    <Route exat path='/system' component={SystemUI} />
                    <Route exat path='/' component={GuideUI} />
                </Switch>
            </HashRouter>
        </div>
    );
});
