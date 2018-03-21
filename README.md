# download  
## Introduction  

 :rocket: NodeJS下载页面资源  

## Install
```text
$ git clone https://github.com/itagn/download.git 
```
## Usage
```javascript
;(function(){
    let { download } = require('./index');
    let files = [{
        tag: 'img',
        type: 'jpg',
        descript: '图片'
    }, {
        tag: 'video',
        type: 'mp4',
        descript: '视频'
    }];
    let url = 'https://tieba.baidu.com/f?ie=utf-8&kw=%E6%89%92%E7%9A%AE&fr=search';
    download(url, files);
})();
```

## Contributing

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

## License
MIT © [itagn][1]  
作者: 微博 [@itagn][2] - Github [@itagn][3] 

[1]: https://www.npmjs.com/~itagn
[2]: https://weibo.com/p/1005053782707172
[3]: https://github.com/itagn