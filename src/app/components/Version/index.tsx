import { applicationConfig } from '@/config/application'
import { Container } from './styles'
import { bebasNeue } from '@/app/fonts'

export default function Version() {
  return (
    <Container>
      <span className={bebasNeue.className}>v {applicationConfig.version}</span>
    </Container>
  )
}
