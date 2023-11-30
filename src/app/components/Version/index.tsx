import { applicationConfig } from '@/config/application';
import { Container } from './styles';
import { bebas_neue } from '@/app/fonts';

export default function Version() {
  return (
    <Container>
      <span className={bebas_neue.className}>
        v {applicationConfig.version}
      </span>
    </Container>
  );
}
