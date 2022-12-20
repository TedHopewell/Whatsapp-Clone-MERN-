import React from 'react'
import '../src/sidebar.css'
import { ChatOutlined, DonutLarge, MoreVert } from '@mui/icons-material'
import {Avatar, IconButton } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar source='https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png' />
            <div className='sidebar_headerRight'>
                <IconButton>
                        <DonutLarge />
                </IconButton>
            
                <IconButton>
                        <ChatOutlined />
                </IconButton>
                <IconButton>
                        <MoreVert />
                </IconButton>
            </div>
        </div>
        {/* <h1>I'm the sidebar</h1> */}
    </div>
  )
}

export default Sidebar