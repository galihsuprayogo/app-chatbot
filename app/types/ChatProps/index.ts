type methodChat = 'get' | 'post'

export default interface ChatProps {
  body?: string
  name?: string
  method?: methodChat
}
