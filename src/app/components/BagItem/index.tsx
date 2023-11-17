import { Item, useBagContext } from '@/context/bag';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Actions, Body, Container, InputWrapper, PhotoFood } from './styles';
import Price from '../Price';
import { poppins } from '@/app/fonts';
import { IoTrashBinSharp, IoChevronDownOutline } from 'react-icons/io5';

type BagItem = {
  item: Item;
  index: number;
};

export default function BagItem({ item, index }: BagItem) {
  const { editItem, removeItemByIndex } = useBagContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const inputOnClick = () => {
    inputRef?.current?.focus();
  };

  const [inputValue, setInputValue] = useState(item.qty);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.currentTarget.value));
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const trashOnClick = () => {
    removeItemByIndex(index);
  };

  useEffect(() => {
    editItem({
      ...item,
      qty: inputValue,
    });
  }, [inputValue, editItem]);

  return (
    <Container>
      <div>
        <PhotoFood
          src={item.photo as string}
          height={80}
          width={80}
          alt={item.title + '_photo'}
        />

        <Body>
          <span className={poppins.className}>{item.title}</span>
          <Price>{item.unityPrice}</Price>
        </Body>
      </div>

      <Actions>
        <button onClick={trashOnClick}>
          <div>
            <IoTrashBinSharp />
          </div>
        </button>
        <InputWrapper onClick={inputOnClick}>
          <input
            ref={inputRef}
            type="number"
            value={inputValue}
            onChange={inputOnChange}
            onFocus={inputOnFocus}
          />
          <IoChevronDownOutline />
        </InputWrapper>
      </Actions>
    </Container>
  );
}
