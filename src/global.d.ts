import { IBridge } from './types/IBridge'

export declare global {
    interface Window {
        api: IBridge;
    }
}
