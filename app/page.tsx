import { Chat } from '@/components'

export default function RootMain() {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex-1 flex-grow overflow-y-scroll bg-purple-200 px-5 py-6 md:px-10'>
        <Chat method='get' avatar_url='2.png' className='ring-white' />
        <Chat method='post' avatar_url='6.png' className='ring-blue-500' />
      </div>
      <div className='bg-gray-100 px-4 py-2'>
        <div className='flex items-center'>
          <input
            className='mr-2 w-full rounded-full border px-4 py-2'
            type='text'
            placeholder='Type your message...'
          />
          <button className='rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700'>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
