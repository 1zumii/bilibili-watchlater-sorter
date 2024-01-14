# 哔哩哔哩稍后再看视频排序

## 注入脚本
> Chrome 禁止直接粘贴，需要先输入 `allow pasting`

```js
(async () => {
    const response = await fetch('https://raw.githubusercontent.com/1zumii/bilibili-watchlater-sorter/main/output/index.js');
    const scriptContent = await response.text();

    const script = document.createElement('script');
    script.type = 'module';
    script.text = scriptContent;

    document.body.appendChild(script);
})();
```
