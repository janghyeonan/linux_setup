var express = require('express');
var app = express();
var user = require('./routes/user'); //분리
var morgan = require('morgan'); //서버에서 로그정보를 상세하게 알수있다.
var bodyParser = require('body-parser'); //
//미들웨어추가
//collback 함수
//var myLogger = function(req, res, next){
//  console.log(req.url);
//  next();
//};
//app.use(myLogger);

app.use(morgan('dev')); //개발서버에서 어떤 피드백을 주는지 보여준다.
app.use(bodyParser.json()); //json 형태로 받게 해준다.
app.use('/', express.static('public'));

//app.get('/', function(req, res){
//  res.send('welcome')
//});

app.use('/user', user);

app.listen(3000, function(){
  console.log('example app is listening on port 3000');
});
