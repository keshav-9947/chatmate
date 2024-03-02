import React, { useState } from 'react'
// import axios from 'axios'
import { ChatState } from '../Context/ChatProvider'
import {Box} from "@chakra-ui/layout"
import SideDrawer from '../components/parts/SideDrawer'
import MyChats from '../components/MyChats'
import ChatBox from '../components/ChatBox'

const ChatPage = () => {
  const {user} =ChatState()
  const [fetchAgain,setFetchAgain]=useState(false)

  return ( 
    <div style={{ width: "100%" }}>
    {user && <SideDrawer/>}
      <Box display="flex" justifyContent="space-between" w="100%" h="92vh" p="12px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
      </Box>
    </div>
  )
}

export default ChatPage