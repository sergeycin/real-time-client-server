import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function EventSubscribe() {
  const [messages,setMessages] = useState([])
  const [value,setValue] = useState('')

  const sendMessage = async () =>{
    await axios.post('http://localhost:8000/new-messages',{
      message:value,
      id: Date.now()
    })
  }

  useEffect(()=>{
    subscribe()
  },[])

  const subscribe = async () =>{
    const eventSource = new EventSource('http://localhost:8000/connect')
    eventSource.onmessage = function(event){
        const message = JSON.parse(event.data)
        setMessages(prev => [message,...prev])
    }
  }

  return (
    <div className="center">
        <div>
            <div className="form">
                <input value={value} onChange={e => setValue(e.target.value)} type="text" name="" id="" />
                <button onClick={sendMessage}>Отправить</button>
            </div>
            <div className="messages">
                {messages.map(mess =>
                    <div className="message" key={mess.id}>
                      {mess.message}
                    </div>
                  )}
            </div>
        </div>
    </div>
  );
}

export default EventSubscribe
