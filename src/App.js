import React from 'react'
import ChatFeed from './Components/chatfeed'
import './App.css'
import {ChatEngine} from 'react-chat-engine'
import LoginForm from './Components/LoginForm'



const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
  return(
    <div>
      <ChatEngine
        height="100vh"
        projectID="a9211898-8017-4cbf-b935-8125250fab70"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  )
}


export default App 