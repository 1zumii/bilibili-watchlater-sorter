import type { ResourceVideo, Sorter } from './types';

declare global {
    interface Window {
        __INITIAL_STATE__: {
            resourceList: ResourceVideo[];
            [prop: string]: unknown;
        };
        sorter: Sorter;
    }
}
