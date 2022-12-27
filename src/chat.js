import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import '../src/chat.css'


function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar />
            <div className='chat_headerInfo'>
                <h3>Jabu</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>

            </div>
        </div>
        
        <div className='chat_body'>
            <p className='chat_message'>
                <span className='chat_name'>Hopewell</span>
                Hi there we are building whatsapp you and I
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>

            <p className='chat_message chat_receiver'>
                <span className='chat_name'>Jabu</span>
                Awesome bro can't wait bro
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
        </div>

        <div className='chat_footer'>
            <IconButton>
                <InsertEmoticon />
            </IconButton>
            
            <form>
                <input placeholder='Type a message...'
                    type="text" />
                <button type='submit'>
                    Send a message
                </button>
            </form>
            <IconButton>
                 <Mic />
            </IconButton>
            
        </div>
    </div>
  )
}

export default Chat