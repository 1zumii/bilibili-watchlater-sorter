type UnixTime = number;

export type Video = {
    bvId: string;
    title: string;
    publishTime: UnixTime;
    link: string;
    upper: {
        name: string;
    };
};

export type ResourceVideo = {
    bv_id: Video['bvId'];
    title: Video['title'];
    pubtime: Video['publishTime'];
    upper: Video['upper'];
};

export type Sorter = (
    options:
    (
        { sortType: 'groupBy'; field: keyof Video } |
        { sortType: 'orderBy'; field: keyof Video ; order: 'ascend' | 'descend' }
    )[]
) => void;
