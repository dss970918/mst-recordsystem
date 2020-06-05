import { luna } from '@luna/core';
import { PLUGIN_ID_TEST_SUITE_FILE_MANAGER } from '../contants/pluginids';
import { RecordFile } from './recordfile';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pako = require('pako');

@luna.plugin.registePlugin({ id: PLUGIN_ID_TEST_SUITE_FILE_MANAGER })
export class TestSuiteFileManagerPlugin implements jtlplugin.ITestSuiteFileManagerPlugin {
    public currentProject: jtlplugin.IRecordFile;
    public name = 'jtl.plugin.picasso.testsuite.filemanager';

    public newProject(): jtlplugin.IRecordFile {
        this.currentProject = RecordFile.open();
        return this.currentProject;
    }

    public open(): jtlplugin.IRecordFile;
    public open(content: string): jtlplugin.IRecordFile;
    public open(content?: string): jtlplugin.IRecordFile {
        this.currentProject = RecordFile.open(content);
        return this.currentProject;
    }
    public save(model: jtlplugin.IRecordFile): Blob {
        const str = JSON.stringify(model);
        const compressed = pako.gzip(str);
        const blob = new Blob([compressed]);
        return blob;
    }
}
