import type { Sorter, Video } from './types';

const getVideos = (): Video[] => {
    const resourceVideos = window.__INITIAL_STATE__.resourceList;
    return resourceVideos.map(({ bv_id, title, pubtime, upper }) => ({
        title,
        upper,
        bvId: bv_id,
        publishTime: pubtime,
        link: `https://bilibili.com/video/${bv_id}`,
    }));
};

const createSorter = (videos: Readonly<Video>[]): Sorter => {
    if (videos.length === 0) {
        return _options => [];
    }

    const sorter: Sorter = (options) => {
        let result: Video[] | Video[][] = videos;
        const isNestVideoArray = (v: Video[] | Video[][]): v is Video[][] => Array.isArray(result[0]);

        options.forEach((option) => {
            if (option.sortType === 'groupBy') {
                // 不允许按照时间 group
                if (option.field === 'publishTime') {
                    return;
                }
                // 只允许 groupBy 一次
                if (isNestVideoArray(result)) {
                    return;
                }
                const map = new Map<Video[keyof Video], Video[]>();
                result.forEach((video) => {
                    const key = JSON.stringify(video[option.field]);
                    if (map.has(key)) {
                        map.get(key)!.push(video);
                    } else {
                        map.set(key, [video]);
                    }
                });
                result = Array.from(map.values());
            } else {
                const orderer = (
                    { [option.field]: v1 }: Video,
                    { [option.field]: v2 }: Video,
                ): number => {
                    let _v1 = v1;
                    let _v2 = v2;
                    if (typeof v1 !== 'string' && typeof v1 !== 'number') {
                        _v1 = JSON.stringify(v1);
                        _v2 = JSON.stringify(v2);
                    }
                    return option.order === 'ascend'
                        ? _v1 < _v2 ? -1 : 1
                        : _v1 < _v2 ? 1 : -1;
                };
                if (isNestVideoArray(result)) {
                    result = result.map(videos => videos.sort(orderer));
                } else {
                    result = result.sort(orderer);
                }
            }
        });

        console.table(
            result
                .flat(1)
                .map(video => ({
                    ...video,
                    upper: video.upper.name,
                    publishTime: (() => {
                        const date = new Date(video.publishTime * 1000);
                        return [
                            `${date.getFullYear()}年`,
                            `${date.getMonth() + 1}月`,
                            `${date.getDate()}日`,
                            ' ',
                            date.getHours(),
                            ':',
                            date.getMinutes(),
                            ':',
                            date.getSeconds(),
                        ].join('');
                    })(),
                })),
        );
    };
    return sorter;
};

(async () => {
    const videos = getVideos();
    const sorter = createSorter(videos);

    window.sorter = sorter;
    // TODO: logger usage
    console.log();

    sorter([
        { sortType: 'groupBy', field: 'upper' },
        { sortType: 'orderBy', field: 'upper', order: 'ascend' },
        { sortType: 'orderBy', field: 'publishTime', order: 'ascend' },
    ]);
})();
