import { EN_RECORD_TYPE } from '../../contants/en_record_type';

export const registerPlayer = (name: EN_RECORD_TYPE, player: any) => {
    players.set(name, player);
};

export const getPlayer = (name: EN_RECORD_TYPE) => players.get(name)!;

const players = new Map<EN_RECORD_TYPE, any>();

const importAll = (r: __WebpackModuleApi.RequireContext) => {
    r.keys().forEach(r);
};

importAll(require.context('./'));
