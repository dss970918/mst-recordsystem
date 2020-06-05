import { luna } from '@luna/core';
import { saveAs } from 'file-saver';
import {
    PLUGIN_ID_TEST_SUITE_FILE_MANAGER,
    PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER,
    PLUGIN_ID_TEST_SUITE_RECORDER,
    PLUGIN_ID_TEST_SUITE_REPLAY_MANAGER,
} from '../contants/pluginids';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pako = require('pako');

const parentid = 'jtl.plugin.debugger.toolbar';

const id = 'jtl.plugin.debugger.toolbar.recordsystem';
const recordId = 'jtl.plugin.debugger.toolbar.recordsystem.recorder';
const stopId = 'jtl.plugin.debugger.toolbar.recordsystem.stop';
const playerId = 'jtl.plugin.debugger.toolbar.recordsystem.player';
const saverId = 'jtl.plugin.debugger.toolbar.recordsystem.saver';
const loaderId = 'jtl.plugin.debugger.toolbar.recordsystem.loader';
@luna.plugin.registePlugin({ id })
export class ConfigFileToolbarPlugin implements jtlplugin.IPlugin {
    public readonly name: string = '脚本录制系统';
    public con: any;
    public close: any;
    public ele: any;
    private _fileExt = 'pcst';
    public async onInitPlugin() {
        const toolbar = luna.plugin.get<jtlplugin.IToolbarPlugin>('jtl.plugin.toolbar')!;

        luna.comp.toolbar.addMenuItem({
            id,
            name: '脚本录制系统',
        });

        luna.comp.toolbar.addMenuItem({
            id: recordId,
            name: '开始录制',
            onClick: () => {
                const fileManager = luna.plugin.get<jtlplugin.ITestSuiteFileManagerPlugin>(
                    PLUGIN_ID_TEST_SUITE_FILE_MANAGER
                )!;
                fileManager.newProject();

                const caseManager = luna.plugin.get<jtlplugin.ITestSuiteTestCaseManagerPlugin>(
                    PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER
                )!;
                caseManager.newTestCase();

                // eslint-disable-next-line no-unused-expressions
                luna.plugin.get<jtlplugin.ITestSuiteRecorderPlugin>(PLUGIN_ID_TEST_SUITE_RECORDER)?.start();
            },
        });

        luna.comp.toolbar.addMenuItem({
            id: stopId,
            name: '结束录制',
            onClick: () => {
                // eslint-disable-next-line no-unused-expressions
                luna.plugin.get<jtlplugin.ITestSuiteRecorderPlugin>(PLUGIN_ID_TEST_SUITE_RECORDER)?.stop();
            },
        });

        luna.comp.toolbar.addMenuItem({
            id: saverId,
            name: '保存录制脚本',
            onClick: () => {
                const fileManager = luna.plugin.get<jtlplugin.ITestSuiteFileManagerPlugin>(
                    PLUGIN_ID_TEST_SUITE_FILE_MANAGER
                )!;
                const file = fileManager.save(fileManager.currentProject);
                // const blob = new Blob([file], { type: 'text/plain;charset=utf-8' });
                saveAs(file, `test-${new Date()}.pcst`);
            },
        });

        luna.comp.toolbar.addMenuItem({
            id: loaderId,
            name: '加载录制脚本',
            onClick: () => {
                this._showBtn();
            },
        });

        luna.comp.toolbar.addMenuItem({
            id: playerId,
            name: '播放脚本',
            onClick: () => {
                const replayManager = luna.plugin.get<jtlplugin.ITestSuiteReplayManagerPlugin>(
                    PLUGIN_ID_TEST_SUITE_REPLAY_MANAGER
                )!;
                void replayManager.start();
            },
        });

        luna.comp.toolbar
            .menu('default')
            .item(toolbar.TOOLBAR_IDS.CENTER)
            .item(parentid)
            .item(id)
            .item(recordId)
            .end()
            .item(stopId)
            .end()
            .item(saverId)
            .end()
            .item(loaderId)
            .end()
            .item(playerId);
    }

    private _showBtn() {
        if (!this.con) {
            // eslint-disable-next-line no-multi-assign
            this.con = document.createElement('div');
            this.con.style.position = 'fixed';
            this.con.style.width = '140px';
            this.con.style.height = '86px';
            this.con.style.top = '100px';
            this.con.style.left = '400px';
            this.con.style.background = '#aaaaaa';
            this.con.style.borderRadius = '10px';
            this.con.style.padding = '8px';

            // add file btn
            // eslint-disable-next-line no-multi-assign
            this.ele = document.createElement('input');
            this.ele.type = 'file';
            this.ele.style.width = '70px';
            // add close btn
            // eslint-disable-next-line no-multi-assign
            this.close = document.createElement('span');
            this.close.innerHTML = '取消';
            this.close.style.display = 'inline-block';
            this.close.style.textAlign = 'center';
            this.close.style.width = '40px';
            this.close.style.marginLeft = '10px';
            this.close.style.background = 'white';

            const ttl = document.createElement('p');
            ttl.innerHTML = '选择要导入的文件';
            this.con.append(ttl);
            this.con.append(this.ele);
            this.con.append(this.close);
        }

        document.body.append(this.con);
        this._addEvents();
        this._chooseFile();
    }

    private _addEvents() {
        this.ele.addEventListener('change', this._onFileChosen);
        this.close.addEventListener('click', this._onCancel);
    }

    private _chooseFile() {
        this.ele.accept = this._fileExt.startsWith('.') ? this._fileExt : `.${this._fileExt}`;
        this.ele.dispatchEvent(new MouseEvent('click'));
    }

    private _onFileChosen = (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];
        this._removeBtn();
        this.ele.value = '';

        const reader = new FileReader();
        reader.onload = async () => {
            const bufer = reader.result as ArrayBuffer;
            const res = pako.ungzip(bufer, { to: 'string' });
            // const arr = new Uint8Array(res);
            // const doc = aesDecode(arr);
            const fileManager = luna.plugin.get<jtlplugin.ITestSuiteFileManagerPlugin>(
                PLUGIN_ID_TEST_SUITE_FILE_MANAGER
            )!;
            fileManager.open(res);

            const caseManager = luna.plugin.get<jtlplugin.ITestSuiteTestCaseManagerPlugin>(
                PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER
            )!;
            // eslint-disable-next-line prefer-destructuring
            caseManager.currentCase = fileManager.currentProject.testCases[0];
        };
        reader.readAsArrayBuffer(file);
    };

    private _removeBtn() {
        this.close.removeEventListener('click', this._onCancel);
        this.ele.removeEventListener('change', this._onFileChosen);
        this.con.remove();
    }

    private _onCancel = (e: any) => {
        this._removeBtn();
    };
}
