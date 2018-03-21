# download  
## Introduction  

 :rocket: Use NodeJS to download files

## Install
```text
$ git clone https://github.com/itagn/download.git 
```
## Usage

```text
$ cd download
$ npm install
$ touch test.js  //  As follows
$ node test.js
```
code of test.js
```javascript
;(function(){
    let { download } = require('./index');
    let files = [{
        tag: 'img',
        type: 'jpg',
        descript: 'images'
    }, {
        tag: 'video',
        type: 'mp4',
        descript: 'videos'
    }];
    let url = '';  //  url
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