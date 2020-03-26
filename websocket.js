var server = require('ws').Server;
var s = new server({port : 9000});
var name;

s.on('connection',function(ws){
    
    ws.on('message',function(message){
       message = JSON.parse(message);
       
       
           console.log("Message received:");
           console.log(message.type);
           console.log(message.data);

        s.clients.forEach(function e(client) {
        
            client.send(JSON.stringify({
               
                name: message.type,
                data: message.data 
            })); 
        
        });

    });
    console.log("A Client has connected");
    ws.on('close',function(){
        console.log("A Client has ended connection")
    });
});
