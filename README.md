# 哔哩哔哩稍后再看视频排序

## 注入脚本
> Chrome 禁止直接粘贴，需要先输入 `allow pasting`

```js
(async () => {
    const BASE_URL = 'https://raw.githubusercontent.com/1zumii/bilibili-watchlater-sorter';
    const BRANCH = 'main';
    const SCRIPT_PATH = 'output/index.js';

    const response = await fetch([BASE_URL, BRANCH, SCRIPT_PATH].join('/'));
    const scriptContent = await response.text();

    const script = document.createElement('script');
    script.type = 'module';
    script.text = scriptContent;

    document.body.appendChild(script);
})();
```
