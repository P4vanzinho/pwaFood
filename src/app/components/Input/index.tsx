import { bebas_neue } from '@/app/fonts';
import { Container } from './styles';
import { MdAlternateEmail, MdLock, MdPhoneAndroid } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';

type InputType = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...rest }: InputType) {
  const icon = {
    ['email']: <MdAlternateEmail />,
    ['password']: <MdLock />,
    ['tel']: <MdPhoneAndroid />,
    ['text']: <PiTextTBold />,
  };

  return (
    <Container type={rest.type}>
      <label className={bebas_neue.className}>
        {label} {rest.required && '*'}
      </label>

      <div>
        <input {...rest} type={rest.type}></input>
        <div>{icon[rest.type]}</div>
      </div>
    </Container>
  );
}
