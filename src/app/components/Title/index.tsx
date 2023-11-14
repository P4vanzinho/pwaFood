import { ReactNode } from 'react';
import { bebas_neue } from '@/app/fonts';
import { Text } from './styles';

interface ButtonRegistrationType {
  children: ReactNode;
}

export default function Title({ children }: ButtonRegistrationType) {
  return <Text className={bebas_neue.className}>{children}</Text>;
}
