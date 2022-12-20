import React from 'react'
import '../src/sidebar.css'
import { ChatOutlined, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import {Avatar, IconButton } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar src='https://e3.365dm.com/22/12/2048x1152/skynews-messi-instagram_6002141.png?20221220141358' />
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
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                <SearchOutlined />
                <input placeholder='Search or start a new chat' type="text" />
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar