export const snapshot = {
    defaultUrl: 'defaultUrl',
    url: [
        { name: 'firstName', url: 'www.baidu.com' },
        { name: 'secondName', url: 'www.sougou.com' },
    ],
    data: [
        {
            key: '1',
            command: '播放',
            target: '32',
            value: '西湖区湖底公园1号',
        },
        {
            key: '2',
            command: '暂停',
            target: '42',
            value: '西湖区湖底公园1号',
        },
    ],
    columns: [
        {
            title: '命令',
            dataIndex: 'command',
            key: 'command',
        },
        {
            title: '目标',
            dataIndex: 'target',
            key: 'target',
        },
        {
            title: '值',
            dataIndex: 'value',
            key: 'value',
        },
    ],
};
