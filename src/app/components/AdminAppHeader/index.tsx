import {
  Container,
  BusinessContainer,
  ContentContainer,
  LogoButton,
  WelcomeAndMenuContainer,
} from './styles';
import { bebas_neue, poppins } from '../../fonts';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminAppHeader() {
  const businessName = 'mc-donalts'.toUpperCase();
  const userName = 'Rogerio Pavan da Silva';
  const welcomeMessage = `${userName}!`;
  const quantityOfButtons = 4;
  const router = useRouter();

  const [linkButtons, setLinkButtons] = useState(
    new Array(quantityOfButtons).fill(false),
  );

  function getTitleButtonForIndex(index?: number) {
    switch (index) {
      case 0:
        return 'Cardapio';
      case 1:
        return 'Promocoes';
      case 2:
        return 'Pedidos';
      case 3:
        return 'Configurar Whatsapp';
    }
  }
  const pathname = usePathname();

  function handleButtonsOfMenu(index: number) {
    const newButtonsState = [...linkButtons];
    newButtonsState.fill(false);
    newButtonsState[index] = true;
    setLinkButtons(newButtonsState);
    if (index === 0) {
      router.push('/admin/products');
    }
  }

  useEffect(() => {
    if (pathname === '/admin/products') {
      setLinkButtons(prevButton => prevButton.map((_, index) => index === 0));
    }
  }, [pathname]);

  return (
    <Container>
      <BusinessContainer>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            width="20"
            height="20"
            rx="5"
            transform="matrix(-1 0 0 1 20 0)"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_179_1464" transform="scale(0.0125)" />
            </pattern>
            <image
              id="image0_179_1464"
              width="80"
              height="80"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAclBMVEW8ABb/xzb////7uzTicCjEFxreZCbZVyT9wjXmfSrogivJJRzLLB3YVCTADBjVSyLNMh40AAaBAA+rABSgABNtAA0iAAQEAAB5AA75tDPulS7qiSzfaSfbXCXtki3kdynTRSH2rDL0pjHQPCDxnC/6uDSMO5dpAAADB0lEQVRYhe1Z2baqMAxtURQZ1aMeB1Bx+P9fPCQt0IYweFffrvtFuhfdTZOdgio8z9tsf4QD7PaHSkx4v0cXagr730pw705PiKMnDi71hNgIpwEKsRU7t4JOyvvFF/814sW8iLp0VMwX8T/I+VcJCFObTkOkr/6netFJKpTWVL/U9ImJfTA+0AseVDFFvUcAip/FeIZ5vojf1ee5pSENs1j4D5seRwLxwabWEFFi0nJdXUQQ43K6Xjqr7p/jJdRgpnfnAx3iZQ502je/gzkEqG6PIKibom9wrYqRBs2SUwIMmkhUNgMM0Q+MzIXtmuNYQCRPPchkHQvELTNNP2GwmCh4MhOE4cIIEyuboGD0nqaHi1+a4VkHhqG2XrnA8D5JEJur9UQBw5cWbjeZ2MsOAPco286KsdV8Hz/aUwHLP6ksd7hzZhC4wDKhArOpew7tXAnxQuKqd94AiZDOZgDtK3ODQD/LwHA4ApplSp1VyjKDyWSDxKDvJKl9wKJK87SLW0FzOlZFFqOC6C9pMmkraBVVTjMOFq+0qPrwlieLLqkdWCi7XS3uXAvaZ+q1kxwOKtU3i1vVgrZJ8LCQ9xHBnEl1XgvmFl0wXBdXZtmEc029mbFHiyrA2uKeteDTotdMoTrQFrEfkVEtaBfAZ6zUQczd1BiRpYd7RbUZNVegpgaERstaXdoFPk7kg7BvJUhPAnyxGHmw3NjKlUqwJLQy/GpQULmGNuhLCb4IfWG6iqJkF1XLdKau2LhtqDzTV4KQ67y692ipLGgn0DyrzJIOrys4aETtVXpq6mambbvkusCG9jW11oIPPBt3tmpPeZ8mqHv8Kfpx529Z8pnoWd6E3sSa0FqQvrKu+QQxM6lgMig49Gpc8IIZH0rMp9aEzj598PQIRuOCOS8YrxDUH1qw6qsn3VONOS/Yg0YwKYoe78zHvW/ArwWzPOkpdT5DTBVUd+ciXi4+/jL5xRdfuIXjX2F3YutWcC82bgUPwnP4V0AVIPy54PC39iP8ueB5h72Tn9t/tptK7A801h1ZLubZVAAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
        <span className={poppins.className}>{businessName}</span>
      </BusinessContainer>

      <ContentContainer>
        <LogoButton type="button" className={bebas_neue.className}>
          <span>FOOD-</span>
          <span>E</span>
        </LogoButton>

        <WelcomeAndMenuContainer>
          <div className={poppins.className}>
            <span>Ola, </span>
            <span>{welcomeMessage}</span>
          </div>

          <section className={poppins.className}>
            {Array.from({ length: quantityOfButtons }).map((_, index) => (
              <button
                key={index}
                className={
                  linkButtons[index]
                    ? 'green_bg_white_color'
                    : 'gray_bg_black_color'
                }
                onClick={() => {
                  handleButtonsOfMenu(index);
                }}
              >
                {getTitleButtonForIndex(index)}
              </button>
            ))}
          </section>
        </WelcomeAndMenuContainer>
      </ContentContainer>
    </Container>
  );
}
