import * as React from 'react';
import { observer } from 'mobx-react';
import { FolderOpenOutlined, FolderAddOutlined, SaveOutlined, MoreOutlined } from '@ant-design/icons';
import { useMst } from '../../store';

export const PageHeaderUI: React.FC = observer(() => {
    const { pageHeaderNode } = useMst();
    const { projectName } = pageHeaderNode;
    return (
        <div className='page-header'>
            <div className='title'>项目：{projectName}</div>
            <div className='icon-list'>
                <FolderAddOutlined className='icon' />
                <FolderOpenOutlined className='icon' style={{ marginLeft: '20px' }} />
                <SaveOutlined className='icon' style={{ marginLeft: '20px' }} />
                <MoreOutlined className='icon' style={{ marginLeft: '20px' }} />
            </div>
        </div>
    );
});
