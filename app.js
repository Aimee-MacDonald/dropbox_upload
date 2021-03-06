require('dotenv').config();

var request = require('request');
var fs = require('fs');

var access_token = process.env.ACCESS_TOKEN;
var filename = 'vid.MP4';

var content = fs.readFileSync(filename);

options = {
  method: "POST",
  url: 'https://content.dropboxapi.com/2/files/upload',
  headers: {
    "Content-Type": "application/octet-stream",
    "Authorization": "Bearer " + access_token,
    "Dropbox-API-Arg": "{\"path\": \"/dropbox_upload/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
  },
  body:content
};

request(options,function(err, res,body){
     console.log("Err : " + err);
     console.log("res : " + res);
     console.log("body : " + body);
 })
