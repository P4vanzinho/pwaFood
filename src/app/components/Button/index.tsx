import { ReactNode } from 'react';
import { poppins } from '@/app/fonts';
import { Container } from './styles';

interface ButtonRegistrationType {
  text: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  text,
  loading,
  disabled = false,
}: ButtonRegistrationType) {
  const pLoading = typeof loading !== 'boolean' ? false : loading;

  return (
    <Container className={poppins.className} loading={pLoading}>
      <button disabled={disabled} type="button">
        {text}
      </button>
    </Container>
  );
}
