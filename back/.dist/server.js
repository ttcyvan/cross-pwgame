"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _chalk = _interopRequireDefault(require("chalk"));

var _socket = _interopRequireDefault(require("socket.io"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = process.env.PORT;
var app = (0, _express["default"])();

var display = function display(str) {
  return console.log("[".concat((0, _moment["default"])(), "] ").concat(str));
};

app.get('/', function (req, res) {
  res.send('<h1>le serveur tourne </h1>');
});
var server = app.listen(port, function () {
  display(_chalk["default"].magenta(" Le serveur tourne sur localhost:".concat(port)));
});

var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var socket = (0, _socket["default"])(server);
socket.on('connection', function (socket, pseudo) {
  // Quand un client se connecte, on lui envoie un message
  var result = random(1, 222);
  socket.emit('message', result); // On signale aux autres clients qu'il y a un nouveau venu

  socket.broadcast.emit('message', 'Un autre client vient de se connecter ! '); // Dès qu'on nous donne un pseudo, on le stocke en variable de session

  socket.on('deconnection', function (pseudo) {
    socket.pseudo = pseudo;
    console.log(' new pseudo:', pseudo);
  }); // Dès qu'on reçoit un "message" (clic sur le bouton), on le note dans la console

  socket.on('message', function (message) {
    // On récupère le pseudo de celui qui a cliqué dans les variables de session
    console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
  }); //resultemit();
});
/*
const socketio = io(server)

const users: Record<string, User> = {}

socketio.on('connection', (socket: Socket) => {
  // CURRENT SOCKET/PLAYER

  display(chalk.cyan(`Connection opened for ( ${socket.id} )`))

  socket.on('disconnect', () => {
    if (users[socket.id]?.nickname) {
      const { nickname } = users[socket.id]
      display(chalk.yellow(`Goodbye ${nickname}`))
    }
    display(chalk.cyan(`Connection closed for ( ${socket.id} )`))
  })

  socket.on('game::sendNickname', payload => {
    const user = JSON.parse(payload)
    const { nickname } = user
    display(chalk.yellow(`Here comes a new challenger : ${nickname} ( from ${socket.id} )`))

    users[socket.id] = { nickname }

    socket.emit('game::start', {
      points: 1337,
    })
  })
})

*/