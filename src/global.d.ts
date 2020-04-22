import { Bridge } from './types/Bridge';

export declare global {
    interface Window {
        api: Bridge;
    }
}
