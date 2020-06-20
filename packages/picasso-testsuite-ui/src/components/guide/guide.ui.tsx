import * as React from 'react';
import { observer } from 'mobx-react';
import '../system.styl';

export const GuideUI: React.FC = observer(() => {
    return (
        <div className='guide'>
            <div className='top-container'>
                <p>欢迎来到脚本录制系统 </p>
            </div>
            <div className='main-container'>
                <div>
                    <p>你想做什么?</p>
                </div>
                <div className='function-p'>
                    <p className='new' onClick={() => alert(1)}>
                        在新项目中记录新测试
                    </p>
                    <p className='open'>打开现有项目</p>
                    <p className='create'>创建一个新项目</p>
                    <p className='close'>关闭脚本录制系统</p>
                </div>
                <div className='foot'>
                    <div>
                        要了解有关selenium IDE的更多信息以及如何使用它，请访问
                        <span> 脚本录制系统项目页面</span>
                    </div>
                </div>
            </div>
        </div>
    );
});
