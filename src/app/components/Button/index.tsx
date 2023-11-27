import { ReactNode } from 'react';
import { poppins } from '@/app/fonts';
import { Container } from './styles';
import classnames from 'classnames';

type ButtonRegistrationType = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  enabledSelect?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  text,
  loading,
  selected = false,
  enabledSelect = false,
  ...rest
}: ButtonRegistrationType) {
  const pLoading = typeof loading !== 'boolean' ? false : loading;

  return (
    <Container
      className={poppins.className}
      selected={selected}
      enabledSelect={enabledSelect}
    >
      <button
        type="button"
        className={classnames({ loading: pLoading })}
        {...rest}
      >
        {text}
      </button>
    </Container>
  );
}
