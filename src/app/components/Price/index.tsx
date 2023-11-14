import CurrencyFormat from 'react-currency-format';
import { ReactNode } from 'react';
import { bebas_neue } from '@/app/fonts';
import { Span } from './styles';

interface ButtonRegistrationType {
  children: ReactNode;
}

export default function Price({ children }: ButtonRegistrationType) {
  const price = Number(children);

  return (
    <Span className={bebas_neue.className}>
      {price?.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}
    </Span>
  );
}
