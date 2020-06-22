import * as React from 'react';
import { observer } from 'mobx-react';
import { FolderOpenOutlined, FolderAddOutlined, SaveOutlined, MoreOutlined, EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useMst } from '../../store';

export const PageHeaderUI: React.FC = observer(() => {
    const { pageHeaderNode } = useMst();
    const { projectName, changeProjectName, addProject, openProject, saveProject } = pageHeaderNode;
    return (
        <div className='page-header'>
            <span className='project-span'>项目：</span>
            <Input
                className='title'
                addonAfter={<EditOutlined className='icon' />}
                defaultValue={projectName}
                onChange={(e) => changeProjectName(e.target.value)}
            />
            <div className='icon-list'>
                <FolderAddOutlined className='icon' onClick={addProject} />
                <FolderOpenOutlined className='icon' onClick={openProject} style={{ marginLeft: '20px' }} />
                <SaveOutlined className='icon' onClick={saveProject} style={{ marginLeft: '20px' }} />
                <MoreOutlined className='icon' style={{ marginLeft: '20px' }} />
            </div>
        </div>
    );
});
