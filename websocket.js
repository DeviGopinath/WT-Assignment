var server = require('ws').Server;
var serv = new server({port : 9000});
var name;

serv.on('connection',function(ws){
    
    ws.on('message',function(message){
       message = JSON.parse(message);
       
       
           console.log("Message received at Server:");
           console.log(message.name);
           console.log(message.address);
           console.log("Sending Received Data to Database.html .....");
        serv.clients.forEach(function e(client) {    client.send(JSON.stringify({  name: message.name,  address: message.address  }));     });

    });
    console.log("A Client has connected");
    ws.on('close',function(){
        console.log("A Client has ended connection")
    });
});

