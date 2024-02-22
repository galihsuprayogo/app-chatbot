'use client'

import React, { useState } from 'react'
import { Chat, Send } from '@/components'
import { ChatRequestProps } from '@/types'
import { chatRequest } from './hooks'

export default function RootMain() {
  const [message, setMessage] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<ChatRequestProps[]>([])

  const handleRequest = async (value: string) => {
    setMessage('')
    // Add the user's message to the chat history
    setChatHistory((prevChat) => [...prevChat, { role: 'user', content: value }])

    try {
      // Make a request to OpenAI for the chat completion
      const res = await chatRequest({
        request: [...chatHistory, { role: 'user', content: value }],
      })

      // Add the assistant's response to the chat history
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: 'assistant', content: res.choices[0].message.content! },
      ])
    } catch (error) {
      alert('Oops, limit request! Please wait for a second.')
    }
  }

  return (
    <div className='flex h-screen flex-col'>
      <div className='flex-1 flex-grow overflow-y-scroll bg-blue-300 px-5 py-6 md:px-10'>
        <React.Fragment>
          <Chat role='system' content='Hi, Can i help you today?' />
          {chatHistory.length > 0
            ? chatHistory.map((item, index) => (
                <Chat
                  key={index}
                  role={item.role}
                  content={item.content}
                  className={`${item.role === 'user' ? 'ring-blue-500' : 'ring-purple-500'}`}
                />
              ))
            : null}
        </React.Fragment>
      </div>
      <Send
        value={message}
        onChange={(value) => setMessage(value)}
        handleRequest={(value) => handleRequest(value)}
      />
    </div>
  )
}
