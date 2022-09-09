const ws = require('ws')

const wss = new ws.Server({
    port: 8000,

},
() => console.log(`server started on 8000`)
)

wss.on('connection', function connection(ws){
    ws.id = Date.now()
    ws.on('message', function(message){
        message = JSON.parse(message)
        switch(message.event){
            case 'message':
                broadCastMessage(message)
                break
            case 'connection':
                broadCastMessage(message)
                break
        }
    })
})
 

// const message ={
//     event: 'message/connection',
//     id: 123,
//     date: '21.01.2021',
//     username: 'Sergey',
//     message: 'Купи слона' 
// }

function broadCastMessage(message,id){
    wss.clients.forEach(client => {
    
            client.send(JSON.stringify(message))

        
    })
}