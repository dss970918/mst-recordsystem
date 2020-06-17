import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RootUI } from './components/root.ui';
import { Provider } from './store';
import { createMST } from './store';

export function initApp() {
    const rootNode = document.body;
    const store = createMST();
    ReactDOM.render(
        <Provider value={store}>
            <RootUI />
        </Provider>,
        rootNode
    );
}
