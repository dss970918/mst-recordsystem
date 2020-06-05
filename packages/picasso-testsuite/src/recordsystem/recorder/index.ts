import { EN_RECORD_TYPE } from '../../contants/en_record_type';

export const registerRecorder = (name: EN_RECORD_TYPE, recorder: any) => {
    recorders.set(name, recorder);
};

export const getRecorder = (name: EN_RECORD_TYPE) => {
    return recorders.get(name);
};

const recorders = new Map<EN_RECORD_TYPE, any>();

const importAll = (r: __WebpackModuleApi.RequireContext) => {
    r.keys().forEach(r);
};

importAll(require.context('./'));
