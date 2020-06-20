import * as React from 'react';
import { observer } from 'mobx-react';
import { Menu } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { useMst } from '../../store';

export const MenubarUI: React.FC = observer(() => {
    const { menubarNode } = useMst();
    const { Item } = Menu;
    const { current, handleClick } = menubarNode;

    return (
        <div className='menubar'>
            <Menu
                style={{ backgroundColor: '#DCDCDC', lineHeight: '30px' }}
                onClick={(e) => handleClick(e.key)}
                selectedKeys={[current]}
                mode='horizontal'>
                <Item key='1'>Log</Item>
                <Item key='2'>Reference</Item>
            </Menu>
            <div className='icons-list-right'>
                <StopOutlined className='icon' />
            </div>
        </div>
    );
});
