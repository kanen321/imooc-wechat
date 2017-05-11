'use strict'

var Koa = require('koa');
var wechat = require('./wechat/g')
var config = {
	wechat: {
		appID: 'wxfd0500f1ef27aca4',
		appSecret: '40e34bc92a37c72be7a41368ffce2394',
		token: 'kanhuifeng'
	}
};

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(1234);

console.log('Listening: 1234');
