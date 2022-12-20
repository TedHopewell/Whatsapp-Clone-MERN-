
import './App.css';
// import img from '../src/pics/1.JPG'
import Sidebar from '../src/sidebar'
import Chat from './chat';

function App() {
  return (
    <div className="app">
      <div className='for-later-dont touch this div'>
        {/* <div className='top-part-chats'>
        <image source={img} id='profile-pic'></image>
        <h2 className='chats'>chats</h2>
        </div>
        <div className='chat-names'>
          <div className='names'>
          <div id='profile-pic'></div>
            <h5 className='chat-name'>James</h5>
          </div>
          <div className='names'>
          <div id='profile-pic1'></div>
            <h5 className='chat-name'>chrisopher columbus</h5>
          </div>
          <div className='names'>
          <div id='profile-pic1'></div>
            <h5 className='chat-name'>Fifi</h5>
          </div>
          <div className='names'>
          <div id='profile-pic1'></div>
            <h5 className='chat-name'>Cece</h5>
          </div>
        </div>
        
      </div>
      <div className='chatView'>
            <div className='top-part'>
              <div id='profile-pic'></div>
              <h5 id='profile-name'>James</h5>
            </div>
            
            <div className='chatBox'>
              <h5 id='username'>Hopewell</h5>
              <h6 id='user-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                  Excepteur sint occaecat cupidatat non proident, 
                                  sunt in culpa qui officia deserunt mollit anim id est laborum."
              </h6>
            </div>
            <div className='chatBox2'>
              <h5 id='username'>James</h5>
              <h6 id='user-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                  Nemo enim ipsam voluptatem quia voluptas sit aspern
              </h6>
            </div>
            <div className='chatBox'>
              <h5 id='username'>Hopewell</h5>
              <h6 id='user-text'>aboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil</h6>
            </div>
            <div className='chatBox2'>
              <h5 id='username'>James</h5>
              <h6 id='user-text'> because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</h6>
            </div>
            <div className='chatBox'>
              <h5 id='username'>Hopewell</h5>
              <h6 id='user-text'>Hey how you i have been </h6>
            </div>
            <div className='text-box'>
        
            </div> */}
      </div>
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
