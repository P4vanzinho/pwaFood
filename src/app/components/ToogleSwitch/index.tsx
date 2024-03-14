import { useState } from 'react'
import {
  Container,
  InputCheckBoxInToggle,
  LabelToglleSwitch,
  Switch,
  ToggleSwitch,
} from './styles'
import { poppins } from '@/app/fonts'

interface ButtonRegistrationType {
  text: string
  onChangeCallback: (checked: boolean) => void
}

export default function ToogleSwitch({
  text,
  onChangeCallback,
}: ButtonRegistrationType) {
  const [switched, setSwitched] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCallback(e.currentTarget.checked)

    setSwitched(e.currentTarget.checked)
  }

  return (
    <Container>
      <ToggleSwitch switched={switched}>
        <LabelToglleSwitch>
          <InputCheckBoxInToggle type="checkbox" onChange={onChange} />
          <Switch />
        </LabelToglleSwitch>
        <p className={poppins.className}>{text}</p>
      </ToggleSwitch>
    </Container>
  )
}
