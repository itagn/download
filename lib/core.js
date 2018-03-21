;(function(){
    let request = require('request'), http = require('http'), https = require('https'), fs = require('fs'), cheerio = require('cheerio');
    let data = './data/';
    
    let mkdir = function(path){
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
    let saveFile = function($, dom, type, descript, auth){
        let files = Array.from($(dom));
        let urls = files.map(val => val.attribs.bpic || val.attribs.src);
        urls.forEach((val) => {
            let fileUrl = `${auth}//${val.split('//')[1]}`;
            let fileArr = fileUrl.split('.');
            let fileType = fileArr.length>1 ? fileArr[fileArr.length-1].length>4 ? type : fileArr[fileArr.length-1]: type;
            let fileName = Math.random().toString(32).substr(2, 8);
            let file = `${data}/${fileName}.${fileType}`;
            request.head(fileUrl, function(err,res,body){
                if(err) console.log(`error: ${err}`);
            });
            const writeStream = fs.createWriteStream(file), readStream = request(fileUrl);
            readStream.on('error', function(err) {
                console.log(`---------------${descript}[${fileName}.${fileType}]保存失败---------------`);
                console.log(err);
            });
            readStream.pipe(writeStream);
            readStream.on('end', function(response) {
                console.log(`---------------${descript}[${fileName}.${fileType}]保存成功---------------`);
                writeStream.end();
            });
        });
    }
    let file = function(res, arr, auth){
        let html = '';
        res.setEncoding('utf-8'); 
        res.on('data' , function(data){
            html += data;
        });
        res.on('end' , function(){
            const $ = cheerio.load(html);
            mkdir(data);
            arr.forEach(val => {
                saveFile($, val.tag, val.type, val.descript, auth);
            })
        }).on('error', function() {
            console.log('error');
        });
    }
    let download = function(addr='', arr=[], start=0, end=arr.length){
        const urlArr = addr.split("://");
        if(urlArr.length>1){
            const web = urlArr[0];
            const dom = urlArr[1].split('/');
            arr = arr.slice(start, end);
            if(arr.length > 0){
                if(web === 'http'){
                    http.get(addr , function(res){
                        file(res, arr, 'http:');
                    });
                }else if(web === 'https'){
                    https.get(addr , function(res){
                        file(res, arr, 'https:');
                    });
                }else{
                    console.log('只支持http协议和https协议');
                }
            }
        }else{
            console.log('请输入完整的网址，包括协议');
        }
    }

    module.exports = {
        download
    }
})();