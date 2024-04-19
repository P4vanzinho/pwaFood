import { Item, useBagContext } from "@/context/bag";
import { useEffect, useRef, useState } from "react";
import {
  Actions,
  Body,
  Container,
  InputWrapper,
  PhotoFood,
  QtyControlContainer,
  QtyInputContainer,
  PriceContainer,
} from "./styles";
import Price from "../Price";
import { dmsSans, poppins } from "@/app/fonts";
import trash from "../../../../public/trash.png";
import Image from "next/image";
import subtraticVector from "../../../../public/subtraticVector.svg";

type BagItem = {
  item: Item;
};

export default function BagItem({ item }: BagItem) {
  const { editItem, removeItem } = useBagContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [qty, setQty] = useState(0);
  const [subtractActive, setSubractActive] = useState(true);
  const [inputValue, setInputValue] = useState(item.qty);

  const inputQtyCallback = (value: number) => {
    setQty(value);
  };

  useEffect(() => {
    setSubractActive(inputValue > 0);
    inputQtyCallback(inputValue);
  }, [inputValue]);

  const buttonOnClick = (mode: "add" | "subtract") => {
    if (!subtractActive && mode === "subtract") {
      return;
    }

    setInputValue((current) =>
      mode === "subtract" ? current - 1 : current + 1,
    );
  };

  const inputOnClick = () => {
    inputRef?.current?.focus();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.currentTarget.value));
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const trashOnClick = () => {
    removeItem(item.id as string);
  };

  useEffect(() => {
    editItem({
      ...item,
      qty: inputValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, editItem]);

  return (
    <Container>
      <div>
        <PhotoFood
          src={item.photo as string}
          height={120}
          width={100}
          alt={item.title + "_photo"}
        />

        <Body className={poppins.className}>
          <span className={dmsSans.className}>{item.title}</span>

          <PriceContainer>
            <Price>{item.unityPrice}</Price>
          </PriceContainer>
        </Body>
      </div>

      <Actions>
        <div>
          <button onClick={trashOnClick}>
            <Image src={trash} alt="treshImage" />
          </button>
        </div>
        <InputWrapper onClick={inputOnClick}>
          <QtyInputContainer>
            <input
              className={poppins.className}
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={inputOnChange}
              onFocus={inputOnFocus}
            />

            <QtyControlContainer>
              <div>
                <button
                  disabled={!subtractActive}
                  type="button"
                  onClick={() => buttonOnClick("add")}
                >
                  <Image
                    src={subtraticVector}
                    alt={`botao para subtrair quantidade`}
                    width={10}
                    height={10}
                  />
                </button>

                <button
                  disabled={!subtractActive}
                  type="button"
                  onClick={() =>
                    subtractActive ? buttonOnClick("subtract") : () => {}
                  }
                >
                  <Image
                    src={subtraticVector}
                    alt={`botao para subtrair quantidade`}
                    width={10}
                    height={10}
                  />
                </button>
              </div>
            </QtyControlContainer>
          </QtyInputContainer>
        </InputWrapper>
      </Actions>
    </Container>
  );
}
