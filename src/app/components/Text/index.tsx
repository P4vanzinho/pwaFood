import { ReactNode } from 'react'
import { poppins } from '@/app/fonts'
import { Paragraph } from './styles'

interface ButtonRegistrationType {
  children: ReactNode
}

export default function Text({ children }: ButtonRegistrationType) {
  return <Paragraph className={poppins.className}>{children}</Paragraph>
}
