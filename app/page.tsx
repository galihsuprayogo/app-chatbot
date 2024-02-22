import { Chat, Send } from '@/components'

// const NativeChatBot = () => (
//   <div className='flex h-screen flex-col'>
//     <div className='flex-1 flex-grow overflow-y-scroll bg-purple-200 px-5 py-6 md:px-10'>
//       <Chat method='get' avatar_url='2.png' className='ring-white' />
//       <Chat method='post' avatar_url='6.png' className='ring-blue-500' />
//     </div>
//     <Send />
//   </div>
// )

export default function RootMain() {
  return (
    <div className='flex h-screen flex-col bg-none'>
      <iframe
        src='https://www.chatbase.co/chatbot-iframe/HPTudsPpq7XmNhucKTlWY'
        width='100%'
        className='h-full min-h-[700px]'
      ></iframe>
    </div>
  )
}
