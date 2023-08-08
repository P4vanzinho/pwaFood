import { Container } from './styles';
import Image from 'next/image';
import { poppins, inter, bebas_neue } from '@/app/fonts';

export default function CardFood() {
  let foodTitle = ' Salada de ovo';
  let priceOfFood = '5.00';

  return (
    <Container>
      <Image src="/foodImg.png" alt="" height={157} width={157} />
      <h2 className={poppins.className}>{foodTitle}</h2>
      <span className={bebas_neue.className}>$ {priceOfFood}</span>
    </Container>
  );
}
