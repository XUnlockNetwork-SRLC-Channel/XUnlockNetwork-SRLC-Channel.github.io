//mex server

const encodedpasskey = "MTkzMg==";

var passkey = "";

const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const PORT = process.env.PORT || 9753

 app.get('/', (req, res) => {
   res.sendFile(__dirname + '/chat.html');
});


server.listen(PORT, () => {
   console.log('Server is running on port: ' + PORT)
  console.log('LHBOS SERVER RUNNED')
               });

io.on('connection', (socket) => {
 
   socket.on('checkpasskey', (code) => {
      if (code==encodedpasskey) 
	  {
      
    }
		else
      {
		console.log("warning:unidentified item detected recommended to shutdown server")
	  }
   }); 

});

