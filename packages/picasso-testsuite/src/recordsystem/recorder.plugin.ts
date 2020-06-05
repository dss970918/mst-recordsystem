import { luna } from '@luna/core';
import { PLUGIN_ID_TEST_SUITE_RECORDER, PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER } from '../contants/pluginids';

@luna.plugin.registePlugin({ id: PLUGIN_ID_TEST_SUITE_RECORDER })
export class TestSuiteRecorderPlugin implements jtlplugin.ITestSuiteRecorderPlugin {
    @luna.inject(PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER)
    private _caseManager: jtlplugin.ITestSuiteTestCaseManagerPlugin;

    public name = 'jtl.plugin.picasso.testsuite.recorder';

    private _isRecording = false;

    public start() {
        this._isRecording = true;
    }
    public stop() {
        this._isRecording = false;
    }

    public get isRecording() {
        return this._isRecording;
    }

    public record(step: jtlplugin.ITestStep): boolean {
        if (!this._isRecording) {
            return false;
        }

        const testCase = this._caseManager.currentCase;
        // eslint-disable-next-line no-unused-expressions
        testCase?.steps.push(step);
        console.debug('录制步骤:', step);
        return true;
    }
}
