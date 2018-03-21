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
    let url = 'https://tieba.baidu.com/f?ie=utf-8&kw=%E6%89%92%E7%9A%AE&fr=search';  //  url
    download(url, files);
})();