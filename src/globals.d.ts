declare global {
    interface Window {
        __INITIAL_STATE__: {
            resourceList: {
                bv_id: string;
                title: string;
            }[];
            [prop: string]: unknown;
        };
    }
}

export { };
