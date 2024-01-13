# 哔哩哔哩稍后再看视频排序

## 注入脚本
> Chrome 禁止直接粘贴，需要先输入 `allow pasting`

```js
(() => {
    const head = document.head ?? document.getElementsByTagName('head')[0];

    const script = document.createElement('script');
    script.type = 'module';
    script.setAttribute('src', todo!());

    head.appendChild(script);
})();
```
