import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  console.log('chatLog state', chatLog);

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: 'me', message: `${input}` }];
    setInput('');
    console.log('input and chatLog start', input, chatLog);
    const messages = chatLogNew.map((message) => message.message).join('\n');
    console.log('messages', messages);

    //fetch request to api then combining the chat log array of messages and sending it as a message

    try {
      const response = await fetch('http://localhost:7653/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messages,
        }),
      });
      const data = await response.json();
      console.log('data recieved on front end', data);
      setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }]);
      console.log('data received after post request', data.message);
      console.log('input and chatLog end', input, chatLog);
    } catch (error) {
      console.log('error fetching', error);
    }
  }

  return (
    <div className='App'>
      <aside className='sidemenu'>
        <div className='side-menu-button'>
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <h1 className='title'>CloneGPT</h1>
        <div className='chat-input-container'>
          <form onSubmit={handleSubmit}>
            <input
              rows='1'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='chat-input-textarea'
            ></input>
          </form>
        </div>
        <div className='footer'>
          CloneGPT created by Raymond Nimalan. Check out my github and portfolio
          website!
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message-container ${message.user === 'gpt'}`}>
      <div className='chat-message'>
        <div className={`avatar ${message.user === 'gpt'}`}>
          {message.user === 'gpt' && (
            <svg
              fill='none'
              xmlns='http:www.w3.org/2000/svg'
              strokeWidth={1.5}
              viewBox='0 0 40 40'
            ></svg>
          )}
        </div>
        <div className='message'>{message.message}</div>
      </div>
    </div>
  );
};

export default App;
