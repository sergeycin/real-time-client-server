const express = require('express')
const cors = require('cors')
const events = require('events')
const PORT  =  5000
const app = express()

const emitter = new events.EventEmitter()


app.get('get-message', (req,res) => {
    emitter.once('newMessage', (message) =>{
        res.json(message)
    })
})

app.post('new-message', (req,res) => {
    const message = req.body
    emitter.emit('newMessage',message)
    res.status(200)
})

app.listen(PORT,()=> console.log(`server started on port ${PORT}`)) 