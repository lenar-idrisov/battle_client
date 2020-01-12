console.log('new start')

var express = require('express');
var app = express();
var server = app.listen(7000, () => console.log('server run'))


// обработка тела в ссответсвии с Content-type и передача данных в req.body
/* app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); */
//app.use(bodyParser.text());

// работа с сокетом
const io = require('socket.io')(server);
io.on('connection', socket => {
	console.log('new user connected')
})


app.get('/', function (req, res) {
	res.send('Hello в'+' ');
});

