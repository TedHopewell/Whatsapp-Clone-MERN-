import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import '../src/chat.css'


function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar />
            <div className='chat_hearInfo'>
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
    </div>
  )
}

export default Chat