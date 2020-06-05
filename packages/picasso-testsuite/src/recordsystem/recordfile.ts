import * as _ from 'lodash';
import { RecordBase } from './recordbase';
import { TestCase } from './testcase';

export class RecordFile extends RecordBase implements jtlplugin.IRecordFile {
    public testCases: jtlplugin.ITestCase[];

    // eslint-disable-next-line no-useless-constructor
    private constructor() {
        super();
    }

    public static open(content?: string): jtlplugin.IRecordFile {
        const model = new RecordFile();
        model.testCases = [];
        if (content) {
            const data = JSON.parse(content) as jtlplugin.IRecordFile;
            _.entries(data).forEach(([key, value]) => {
                switch (key) {
                    case 'testCases':
                        (value as jtlplugin.ITestCase[]).forEach((testCase) => {
                            model.testCases.push(TestCase.open(testCase));
                        });
                        break;
                    default:
                        model[key] = value;
                }
            });
        } else {
        }
        return model;
    }
}
