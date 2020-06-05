import { luna } from '@luna/core';
import { Promise as Bluebird } from 'bluebird';
import { PLUGIN_ID_TEST_SUITE_REPLAY_MANAGER, PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER } from '../contants/pluginids';
import { getPlayer } from './player';
import { EN_RECORD_TYPE } from '../contants/en_record_type';

@luna.plugin.registePlugin({ id: PLUGIN_ID_TEST_SUITE_REPLAY_MANAGER })
export class TestSuiteReplayManagerPlugin implements jtlplugin.ITestSuiteReplayManagerPlugin {
    @luna.inject(PLUGIN_ID_TEST_SUITE_TEST_CASE_MANAGER)
    private _caseManager: jtlplugin.ITestSuiteTestCaseManagerPlugin;

    public name = 'jtl.plugin.picasso.testsuite.replaymanager';

    public speed = 20;

    public async start(): Promise<void> {
        const steps = this._caseManager.currentCase?.steps.length;
        let i = 0;
        for (const testCase of this._caseManager.currentCase?.steps!) {
            console.log(`回放中:(${++i}/${steps})`, testCase);
            const stepResult = getPlayer(testCase.recordType as EN_RECORD_TYPE)(testCase);
            if (stepResult instanceof Promise) {
                await Bluebird.delay(1000);
            } else {
                await Bluebird.delay(this.speed);
            }
        }
    }

    public end(): void {
        throw new Error('Method not implemented.');
    }
}
