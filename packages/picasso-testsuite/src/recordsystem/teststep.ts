import * as _ from 'lodash';
import { RecordBase } from './recordbase';

export class TestStep extends RecordBase implements jtlplugin.ITestStep {
    public recordType: string;
    public target: string;
    public value: any;
    public description?: string | undefined;
    // eslint-disable-next-line no-useless-constructor
    private constructor() {
        super();
    }

    public static open(data?: jtlplugin.ITestStep): jtlplugin.ITestStep {
        const model = new TestStep();

        if (data) {
            _.entries(data).forEach(([key, value]) => {
                switch (key) {
                    default:
                        model[key] = value;
                }
            });
        }
        return model;
    }
}
