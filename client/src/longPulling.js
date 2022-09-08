import './App.css';
import useState from 'react'

function LongPulling() {
  const [messages,setMessages] = useState([])
  const [value,setValue] = useState('')
  
  return (
    <div className="center">
        <div>
            <div className="form">
                <input type="text" name="" id="" />
                <button>Отправить</button>
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

export default LongPulling;
