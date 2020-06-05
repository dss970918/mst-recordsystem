/// <reference types="reflect-metadata" />

import { EN_RECORD_TYPE } from '../../contants/en_record_type';
import { getRecorder } from '../recorder';

export const record = (command: EN_RECORD_TYPE) => getRecorder(command);
