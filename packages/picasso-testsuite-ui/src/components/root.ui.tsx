import * as React from 'react';
import { observer } from 'mobx-react';
import { useMst } from '../store';

export const RootUI: React.FC = observer(() => {
    const { title } = useMst();
    return <div>{title}</div>;
});
