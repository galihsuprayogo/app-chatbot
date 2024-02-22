import { Avatar } from '@/components'
import { AvatarProps, ChatProps } from '@/types'

const Chat = (props: ChatProps & AvatarProps) => {
  switch (props.method) {
    case 'get':
      return (
        <div className='mb-5 flex flex-col space-y-2'>
          <div className='flex flex-row items-center justify-start space-x-2'>
            <Avatar avatar_url={props.avatar_url} className={props.className} />
            <span className='font-semibold text-white'>Chatbot</span>
          </div>
          <div className='max-w-sm rounded-lg bg-white p-2 shadow'>Hi, how can I help you?</div>
        </div>
      )
    case 'post':
      return (
        <div className='flex items-center justify-end'>
          <div className='mr-2 max-w-sm rounded-lg bg-blue-500 p-2 text-white shadow'>
            I want to ask about...
          </div>
          <Avatar avatar_url={props.avatar_url} className={props.className} />
        </div>
      )
    default:
      return null
  }
}

export default Chat
