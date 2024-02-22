import { HTMLProps } from 'react'

export default interface AvatarProps {
  avatar_url?: string
  className?: HTMLProps<HTMLElement>['className']
}
