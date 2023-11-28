'use client';

import { Button, Container } from './styles';
import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { bebas_neue, poppins } from '@/app/fonts';
import Image from 'next/image';
import Modal from '../Modal';
import classnames from 'classnames';
import { IoCloseSharp } from 'react-icons/io5';
import { MdOutlineAdd } from 'react-icons/md';
import { RoutesEnum } from '@/app/enums';

interface Props {
  // children: ReactNode;
  //showSidebar: () => void;
}

export default function FloatMenu() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const registerOnClick = () => {
    setShowModal(current => !current);
  };

  return (
    <>
      {!!showModal && (
        <Modal onClickCallback={() => setShowModal(false)}>
          <Container>
            <div onClick={() => router.push(RoutesEnum.NOVA_CATEGORIA)}>
              <button className={bebas_neue.className}>CATEGORIA</button>
              <button>
                <Image src="/notebook.png" alt="" height={24} width={24} />
              </button>
            </div>
            <div>
              <button className={bebas_neue.className}>PRODUTO</button>
              <button>
                <Image src="/gift.png" alt="" height={24} width={24} />
              </button>
            </div>
          </Container>
        </Modal>
      )}

      <Button
        type="button"
        className={classnames(
          poppins.className,
          { higherZIndex: showModal },
          { animate: true },
        )}
        onClick={registerOnClick}
      >
        {!!showModal ? (
          <div>
            {' '}
            <IoCloseSharp />
          </div>
        ) : (
          <span>
            <MdOutlineAdd /> CADASTRO
          </span>
        )}
      </Button>
    </>
  );
}
