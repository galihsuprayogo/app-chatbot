'use client'

import { Avatar } from '@/components'
import { AvatarProps, ChatProps } from '@/types'

const Chat = (props: ChatProps & AvatarProps) => {
  switch (props.role) {
    case 'system':
    case 'assistant':
      return (
        <div className='mb-5 flex w-fit flex-col space-y-3'>
          <div className='flex flex-row items-center justify-start space-x-2'>
            <Avatar avatar_url='/logo.svg' className={props.className} />
            <span className='font-semibold text-white'>Chatbot Sui-AI</span>
          </div>
          <span className='rounded-lg bg-white p-2 font-medium tracking-normal shadow'>
            {props.content}
          </span>
        </div>
      )
    case 'user':
      return (
        <div className='flex flex-row items-center justify-end space-x-2'>
          <span className='rounded-lg bg-blue-500 p-2 text-white shadow'>{props.content}</span>
          <Avatar
            avatar_url={`https://api.multiavatar.com/5.png?apikey=${process.env.NEXT_PUBLIC_AVATAR_URL}`}
            className={props.className}
          />
        </div>
      )
    default:
      return null
  }
}

export default Chat
