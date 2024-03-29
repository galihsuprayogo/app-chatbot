'use client'

const Send = (props: {
  value?: string
  onChange?: (value: string) => void
  handleRequest?: (value: string) => void
}) => {
  return (
    <div className='fixed bottom-0 z-20 w-full'>
      <div className='flex flex-row items-center justify-between space-x-4 bg-gray-100 px-4 py-3'>
        <input
          className='w-full rounded-3xl border-2 border-solid px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-opacity-50'
          type='text'
          placeholder='Type your message...'
          value={props.value}
          onChange={(e) => props.onChange!(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              e.currentTarget.blur()
              props.handleRequest!(props.value!)
            }
          }}
        />
        <button
          onClick={() => props.handleRequest!(props.value!)}
          className='rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Send
