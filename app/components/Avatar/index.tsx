import { AvatarProps } from '@/types'
import Image from 'next/image'

const Avatar = (props: AvatarProps) => (
  <Image
    src={`https://api.multiavatar.com/${props?.avatar_url}?apikey=${process.env.NEXT_PUBLIC_AVATAR_URL}`}
    alt={`avt-${props.avatar_url}`}
    placeholder='empty'
    blurDataURL={`https://api.multiavatar.com/${props?.avatar_url}?apikey=${process.env.NEXT_PUBLIC_AVATAR_URL}`}
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
