'use client'

import { AvatarProps } from '@/types'
import Image from 'next/image'

const Avatar = (props: AvatarProps) => (
  <Image
    src={props.avatar_url!}
    alt={`avt-${props.avatar_url}`}
    placeholder='empty'
    blurDataURL={props.avatar_url}
    height={0}
    width={0}
    sizes='100vw'
    style={{
      objectFit: 'contain',
    }}
    className={`${props.className} h-12 w-12 rounded-full ring-2`}
  />
)

export default Avatar
