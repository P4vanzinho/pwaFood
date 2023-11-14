import { Container } from './styles';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BiBasket, BiHomeAlt2, BiSearch, BiMinus } from 'react-icons/bi';

export default function MenuBottom() {
  const sizeIcons = 22;

  return (
    <Container>
      <div>
        <BiHomeAlt2 size={sizeIcons + 2} />
        <BiMinus />
      </div>
      <div>
        <BiSearch size={sizeIcons + 2} />
        <BiMinus />
      </div>
      <div>
        <FaRegHeart size={sizeIcons} />
        <BiMinus />
      </div>
      <div>
        <BiBasket size={sizeIcons + 2} />
        <BiMinus />
      </div>
      <div>
        <FaRegUser size={sizeIcons} />
        <BiMinus />
      </div>
    </Container>
  );
}
