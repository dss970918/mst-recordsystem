import * as React from 'react';
import { observer } from 'mobx-react';
import { Select, Table, Input } from 'antd';
import {
    StepForwardOutlined,
    CaretRightOutlined,
    PullRequestOutlined,
    ClockCircleOutlined,
    PlayCircleOutlined,
    StopOutlined,
} from '@ant-design/icons';
import { useMst } from '../../store';
import 'antd/dist/antd.css';
import '../system.styl';

export const MainPageUI: React.FC = observer(() => {
    const { Option } = Select;
    const { Search } = Input;
    const { mainPageNode } = useMst();
    const {
        defaultUrl,
        defaultCommand,
        url,
        columns,
        data,
        activeUrl,
        activeCommand,
        targetOnsearch,
        play,
        suspend,
        record,
    } = mainPageNode;

    return (
        <div className='main-page'>
            <div className='icons-list'>
                <StepForwardOutlined className='icon' onClick={play} />
                <CaretRightOutlined className='icon' style={{ marginLeft: '30px' }} onClick={suspend} />
                <PullRequestOutlined className='icon' style={{ marginLeft: '30px' }} rotate={90} onClick={record} />
                <ClockCircleOutlined className='icon' style={{ marginLeft: '30px' }} />
            </div>
            <div className='icons-list-right'>
                <a href='#/'>退出</a>
                <StopOutlined className='icon' style={{ marginLeft: '20px' }} />
                <PlayCircleOutlined className='icon' style={{ marginLeft: '20px' }} />
            </div>
            <div className='top-url'>
                <Select
                    className='url-select'
                    style={{ width: '100%', marginTop: '10px' }}
                    value={defaultUrl}
                    onChange={(e: any) => activeUrl(e)}>
                    {url && url.length
                        ? url.map((o: any) => (
                              <Option value={o.name} key={o.url}>
                                  {o.name}
                              </Option>
                          ))
                        : null}
                </Select>
            </div>
            <div className='table'>
                <Table columns={columns} dataSource={data} style={{ marginTop: '30px' }} />
            </div>

            <div className='input'>
                <div>
                    <span className='span-name'>命令</span>
                    <Select
                        className='command-select'
                        style={{ marginLeft: '40px', width: '300px' }}
                        value={defaultCommand}
                        onChange={(e: any) => activeCommand(e)}>
                        {data && data.length
                            ? data.map((o: any) => (
                                  <Option value={o.command} key={o.key}>
                                      {o.command}
                                  </Option>
                              ))
                            : null}
                    </Select>
                </div>
                <div>
                    <span className='span-name'>目标</span>
                    <Search
                        style={{ width: '300px', marginLeft: '40px', marginTop: '20px' }}
                        onSearch={(e) => targetOnsearch(e)}
                    />
                </div>
                <div>
                    <span className='span-name'>值</span>
                    <Input style={{ width: '300px', marginLeft: '40px', marginTop: '20px' }} />
                </div>
                <div>
                    <span className='span-name'>描述</span>
                    <Input style={{ width: '300px', marginLeft: '40px', marginTop: '20px' }} />
                </div>
            </div>
        </div>
    );
});
