import logo from './logo.svg';
import './App.css';

function App() {
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
          <div className='chat-message-container'>
            <div className='chat-message'>
              <div className='avatar'></div>
              <div className='message'>Hello World!</div>
            </div>
          </div>
          <div className='chat-message-container gpt'>
            <div className='chat-message'>
              <div className='avatar gpt'></div>
              <div className='message'>Hello, I am AI!</div>
            </div>
          </div>
        </div>
        <h1 className='title'>CloneGPT</h1>
        <div className='chat-input-container'>
          <textarea rows='1' className='chat-input-textarea'></textarea>
        </div>
        <div className='footer'>
          CloneGPT created by Raymond Nimalan. Check out my github and portfolio
          website!
        </div>
      </section>
    </div>
  );
}

export default App;
