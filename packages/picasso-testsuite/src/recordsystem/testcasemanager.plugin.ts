import { luna } from '@luna/core';
import { TestCase } from './testcase';
import { PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER, PLUGIN_ID_TEST_SUITE_FILE_MANAGER } from '../contants/pluginids';

@luna.plugin.registePlugin({ id: PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER })
export class TestCaseManagerPlugin implements jtlplugin.ITestSuiteTestCaseManagerPlugin {
    @luna.inject(PLUGIN_ID_TEST_SUITE_FILE_MANAGER)
    private _fileManager: jtlplugin.ITestSuiteFileManagerPlugin;

    public currentCase?: jtlplugin.ITestCase;
    public name = 'jtl.plugin.picasso.testsuite.testcasemanager';

    public newTestCase(): jtlplugin.ITestCase {
        if (!this._fileManager.currentProject) {
            throw new Error('当前没有project');
        }
        this.currentCase = TestCase.open();
        this._fileManager.currentProject.testCases.push(this.currentCase);
        return this.currentCase;
    }
}
