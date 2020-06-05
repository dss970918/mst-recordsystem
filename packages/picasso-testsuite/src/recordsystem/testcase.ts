import * as _ from 'lodash';
import { RecordBase } from './recordbase';
import { TestStep } from './teststep';

export class TestCase extends RecordBase implements jtlplugin.ITestCase {
    public steps: jtlplugin.ITestStep[];

    // eslint-disable-next-line no-useless-constructor
    private constructor() {
        super();
    }

    public static open(data?: jtlplugin.ITestCase): jtlplugin.ITestCase {
        const model = new TestCase();
        model.steps = [];

        if (data) {
            _.entries(data).forEach(([key, value]) => {
                switch (key) {
                    case 'steps':
                        (value as jtlplugin.ITestStep[]).forEach((step) => {
                            model.steps.push(TestStep.open(step));
                        });
                        break;
                    default:
                        model[key] = value;
                }
            });
        }
        return model;
    }
}
