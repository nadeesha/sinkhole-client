'use strict';

var fs = require('fs'),
	path = require('path');


function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

function handlePathCreation(err){
    if(!err || (err && err.code === 'EEXIST')){
        document.write('folder created');
    } else {
        document.write(err);
    }
}

fs.mkdir(path.join(getUserHome(), 'Sinkhole'), handlePathCreation);