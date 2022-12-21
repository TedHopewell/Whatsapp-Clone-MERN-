import { Avatar } from '@mui/material'
import React from 'react'
import '../components/sidebarChat.css'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat_info'>
            <h2>Jabu</h2>
            <p>Where are you bro?</p>
        </div>
    </div>
  )
}

export default SidebarChat