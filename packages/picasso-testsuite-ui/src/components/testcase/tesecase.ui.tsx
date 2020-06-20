import { observer } from 'mobx-react';
import * as React from 'react';
import { Select, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useMst } from '../../store';

export const TestCaseUI: React.FC = observer(() => {
    const { Option } = Select;
    const { Search } = Input;
    const { testCaseNode } = useMst();
    const { defaultTestCase, activeTestCase, testCaseList } = testCaseNode;

    return (
        <div className='testcase'>
            <div className='top-select'>
                <Select
                    className='testcase-select'
                    style={{ width: '80%', marginTop: '5px' }}
                    value={defaultTestCase}
                    onChange={() => activeTestCase}>
                    {testCaseList.map((t) => {
                        return (
                            <Option key={t.value} value={t.value}>
                                {t.name}
                            </Option>
                        );
                    })}
                </Select>
                <PlusOutlined />
            </div>
            <div className='search'>
                <Search style={{ width: '100%', marginTop: '20px' }} onSearch={() => console.log('1')} />
            </div>
        </div>
    );
});
