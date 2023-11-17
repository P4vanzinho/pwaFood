import { ReactNode } from 'react';
import { poppins } from '@/app/fonts';
import { Container } from './styles';

type ButtonRegistrationType = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  text,
  loading,
  ...rest
}: ButtonRegistrationType) {
  const pLoading = typeof loading !== 'boolean' ? false : loading;

  return (
    <Container className={poppins.className} loading={pLoading}>
      <button type="button" {...rest}>
        {text}
      </button>
    </Container>
  );
}
