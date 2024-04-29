import { Container, Close, Content, Button, HelpIconContainer } from "./styles";
import { IoHelp, IoClose } from "react-icons/io5";
import Modal from "../Modal";
import { poppins } from "@/app/fonts";

type DialogProps = {
  closeCallback: () => void;
  actionCallback: () => void;
  text: string;
};

export default function DialogBox({
  closeCallback,
  actionCallback,
  text,
}: DialogProps) {
  const Icon = IoHelp;

  return (
    <Modal onClickCallback={() => closeCallback()}>
      <Container>
        <Close onClick={() => closeCallback()}>
          <div>
            <IoClose />
          </div>
        </Close>

        <Content className={poppins.className}>
          <HelpIconContainer>
            <Icon size={25} />
          </HelpIconContainer>

          <div>
            <h2>{text}</h2>
            <span>Seu produto nao podera ser recuperado</span>
          </div>
        </Content>

        <footer>
          <Button
            className={poppins.className}
            onClick={() => actionCallback()}
            typeButton="delete"
          >
            Sim, excluir
          </Button>

          <Button
            className={poppins.className}
            onClick={() => closeCallback()}
            typeButton="cancel"
          >
            Não, cancelar
          </Button>
        </footer>
      </Container>
    </Modal>
  );
}
