import './App.css';
import {useEffect, useRef, useState} from 'react'
import axios from 'axios'

function WebSocket() {
  const [messages,setMessages] = useState([])
  const [value,setValue] = useState('')
  const socket = useRef() 
  const [username,setUsername] = useState('')
  const [connected,setConnected] = useState(false)
  const sendMessage = async () =>{
    // await axios.post('http://localhost:8000/new-messages',{
    //   message:value,
    //   id: Date.now()
    // })
  }

  useEffect(()=>{
    socket.current = new WebSocket('ws//localhost:8000')

    socket.current.onopen = () =>{
        setConnected(true)
    }
    socket.current.onmessage = () =>{
        
    }
    socket.current.onclose = () =>{
        console.log(`Socket закрыт`)
    }
    socket.current.onerror = () =>{
        console.log('ошибка')
    }
  },[])


  if(!connected){
      return(
        <div className="center">
        <div>
            <div className="form">
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Введите имя' type="text" name="" id="" />
                <button>Войти</button>
            </div>
         
        </div>
    </div>
      )
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

export default WebSocket
