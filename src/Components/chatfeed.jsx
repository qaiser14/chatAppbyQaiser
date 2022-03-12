import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'


const ChatFeed = (props) => {

    console.log(props, "Chatprops")

    const {chats, activeChat, userName, messages} = props

    const chat = chats ? chats[activeChat] : null

    const renderReadReceipts = (message, isMyMessage) => {
       return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`} 
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            /> 
        ))
    }

    console.log(chat, "chatgivenProps", userName, messages)
    console.log(chat,"chat");
    console.log(userName, "userName");
    console.log(messages,"messages");

    // Add render message function
    const renderMessages = () => {
        const keys = Object.keys(messages)
        console.log(keys, "keys for chat");

            return keys.map((key, index) => {
                const message = messages[key];
                const lastMessageKey = index === 0 ? null : keys [index-1];
                const isMyMessage = userName === message.sender.username;

                    return(
                        <div key={`msg ${index}`} style={{width:'100%'}}>
                            <div className="message-block">
                                {isMyMessage
                                ?<MyMessage message={message}/>
                                :<TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                            </div>
                            <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px',
                                marginLeft: isMyMessage ? '0px': '68px' }}>
                                {renderReadReceipts(message, isMyMessage)}
                            </div>
                        </div>
                    )
            })
    } 

    

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                    <div className="chat-subtitle">
                        {chat?.people.map((person) => `${person.person.uername}`)} 
                    </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}>
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat}/>
                </div>
            </div>
        </div>
    )
}

export default ChatFeed

