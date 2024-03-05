'use client';

import classnames from 'classnames';
import { Button, Container, ButtonContainer } from './styles';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { bebas_neue, poppins } from '@/app/fonts';
import Image from 'next/image';
import Modal from '../Modal';
import { IoCloseSharp } from 'react-icons/io5';
import { MdOutlineAdd } from 'react-icons/md';
import { RoutesEnum } from '@/app/enums';

export default function FloatMenu() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();

  const registerOnClick = () => {
    setShowModal(current => !current);
  };

  return (
    <>
      {!!showModal && (
        <Modal onClickCallback={() => setShowModal(false)}>
          <Container>
            <div
              className={classnames({
                disabled: pathname === RoutesEnum.CATEGORIA_CADASTRO,
              })}
              onClick={() => router.push(RoutesEnum.CATEGORIA_CADASTRO)}
            >
              <button className={bebas_neue.className}>
                <span>CATEGORIA</span>
              </button>
              <button>
                <Image src="/notebook.png" alt="" height={24} width={24} />
              </button>
            </div>
            <div
              className={classnames({
                disabled: pathname === RoutesEnum.CADASTRO_PRODUTO,
              })}
              onClick={() => router.push(RoutesEnum.CADASTRO_PRODUTO)}
            >
              <button className={bebas_neue.className}>
                <span>PRODUTO</span>
              </button>
              <button>
                <Image src="/gift.png" alt="" height={24} width={24} />
              </button>
            </div>
          </Container>
        </Modal>
      )}
      <ButtonContainer className={classnames({ higherZIndex: showModal })}>
        <Button
          type="button"
          className={classnames(poppins.className, { higherZIndex: showModal })}
          onClick={registerOnClick}
        >
          {!!showModal ? (
            <div>
              <IoCloseSharp />
            </div>
          ) : (
            <span className={bebas_neue.className}>
              <MdOutlineAdd /> CADASTRO
            </span>
          )}
        </Button>
      </ButtonContainer>
    </>
  );
}
