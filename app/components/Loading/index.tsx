const Loading = (props: { visible?: 'visible' | 'hidden' }) => (
  <div
    className={`${props.visible} absolute inset-0 z-50 flex flex-col items-center justify-center bg-gray-100 opacity-70`}
  >
    <div className='flex h-screen w-full items-center justify-center space-x-2 bg-transparent'>
      <div className='h-6 w-6 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s] md:h-8 md:w-8'></div>
      <div className='h-6 w-6 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s] md:h-8 md:w-8'></div>
      <div className='h-6 w-6 animate-bounce rounded-full bg-blue-500 md:h-8 md:w-8'></div>
    </div>
  </div>
)

export default Loading
