// var app = require('express')();
// var http = reqiure('http')();

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

// http.listen(3000, function() {
// 	console.log('Server at localhost:3000');
// });



// var app = require('express')();
// var http = require('http').Server(app);
// var io =require('socket.io')(http);


// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });
// io.on('connection', function(socket) {
// 	console.log('A user connected');

// 	socket.on('disconnect', function() {
// 		console.log('A user disconnected');
// 	});
// });

// http.listen(3000, function() {
// 	console.log('Server at localhost:3000');
// });


//3  Обработка событий

// var app = require('express')();
// var http = require('http').Server(app);
// var io =require('socket.io')(http);

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket) {
// 	console.log('A user connected');

// 	//Отправка сообщение через промежуток времени
// 	setTimeout(function() {
// 		socket.send('Sent a message 2 seconds after connection');
// 	}, 2000);
// 	socket.on('disconnect', function() {
// 		console.log('A user disconnected');
// 	});
// });

// http.listen(3000, function() {
// 	console.log('Server at localhost:3000');
// });


// 4 Добавление пользовательских событий


// var app = require('express')();
// var http = require('http').Server(app);
// var io =require('socket.io')(http);

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket) {
// 	console.log('A user connected');

// 	//Отправка сообщение через промежуток времени
// 	setTimeout(function() {
// 		socket.emit('myEvent', {description: 'User event from server'});
// 	}, 2000);
// 	socket.on('disconnect', function() {
// 		console.log('A user disconnected');
// 	});
// });

// http.listen(3000, function() {
// 	console.log('Server at localhost:3000');
// });


// 5 Получение событий от клиента

// var app = require('express')();
// var http = require('http').Server(app);
// var io =require('socket.io')(http);

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket) {
// 	socket.on('clientEvent', function (data) {
// 		console.log(data);
// 	});
// });

// http.listen(3000, function() {
// 	console.log('Server at localhost:3000');
// });



//6 Широковещание - посыл сообщений всем подключенным пользователям


var app = require('express')();
var http = require('http').Server(app);
var io =require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

var users = 0;

io.on('connection', function(socket) {
	users++;
	socket.broadcast.emit('broadcast', {description: users + ' users connected!'});
	socket.on('disconnect', function () {
		users--;
		socket.broadcast.emit('broadcast', {description: users + ' users connected!'});
	});
});

http.listen(3000, function() {
	console.log('Server at localhost:3000');
});