import { ReactNode } from 'react'
import { bebasNeue } from '@/app/fonts'
import { Text } from './styles'

interface ButtonRegistrationType {
  children: ReactNode
}

export default function Title({ children }: ButtonRegistrationType) {
  return <Text className={bebasNeue.className}>{children}</Text>
}
