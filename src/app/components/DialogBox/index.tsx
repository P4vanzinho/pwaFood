import { Container, Close, Content, Button } from './styles'
import { IoHelp, IoClose } from 'react-icons/io5'
import Modal from '../Modal'
import { poppins } from '@/app/fonts'

type ActionCallBack = 'yes' | 'no'

type Type = 'MB_OK' | 'MB_OKCANCEL' | 'MB_YESNO' | 'MB_YESNOCANCEL'

type DialogProps = {
  type: Type
  show: boolean
  closeCallback: () => void
  actionCallback: (action: ActionCallBack) => void
  text: string
}

export default function DialogBox({
  type,
  show,
  closeCallback,
  actionCallback,
  text,
}: DialogProps) {
  const closeOnClick = () => {
    closeCallback()
  }

  const buttonOnClick = (action: ActionCallBack) => {
    actionCallback(action)
  }

  const Icon = IoHelp

  return (
    <Modal onClickCallback={closeOnClick}>
      <Container>
        <Close onClick={closeOnClick}>
          <div>
            <IoClose />
          </div>
        </Close>
        <Content className={poppins.className}>
          <div>
            <Icon size={25} />
          </div>
          <h2>{text}</h2>
        </Content>

        <footer>
          <Button
            mode="border"
            className={poppins.className}
            onClick={() => buttonOnClick('yes')}
          >
            Sim, adicionar
          </Button>
          <Button
            mode="danger"
            className={poppins.className}
            onClick={() => buttonOnClick('no')}
          >
            Não, fechar pedido
          </Button>
        </footer>
      </Container>
    </Modal>
  )
}
