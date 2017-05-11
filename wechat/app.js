'use strict'

var Koa	= require('koa');
var sha1 = require('sha1');
var config = {
	wechat: {
		appID: 'wxfd0500f1ef27aca4',
		appSecret: '40e34bc92a37c72be7a41368ffce2394',
		token: 'kanhuifeng'
	}
};

var app = new Koa();

app.use(function *(next){
	console.log(this.query);

	var token = config.wechat.token;
	var signature = this.query.signature;
	var timestamp = this.query.timestamp;
	var nonce = this.query.nonce;
	var echostr = this.query.echostr;

	var str = [token, timestamp, nonce].sort().join('');
	var sha = sha1(str);

	console.log(str);

	if (sha === signature) {
		this.body = echostr + '';
	} else {
		this.body = 'wrong';
	}

});

app.listen(1234);

console.log('Listening: 1234');