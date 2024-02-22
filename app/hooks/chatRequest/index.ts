'use client'

import { ChatRequestProps } from '@/types'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

export async function chatRequest(props: { request: ChatRequestProps[] }) {
  return await openai.chat.completions.create({
    messages: props.request,
    model: 'gpt-3.5-turbo',
  })
}
