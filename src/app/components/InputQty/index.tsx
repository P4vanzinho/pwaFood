import { poppins } from "@/app/fonts";
import { Container, QtyContainer } from "./styles";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

type InputQtyProps = {
  initialValue?: number;
  callback: (value: number) => void;
};

export default function InputQty({
  initialValue,
  callback,
  ...rest
}: InputQtyProps) {
  const [qty, setQty] = useState(initialValue ?? 0);
  const [subtractActive, setSubractActive] = useState(true);

  useEffect(() => {
    setSubractActive(qty > 0);
    callback(qty);
  }, [callback, qty]);

  const buttonOnClick = (mode: "add" | "subtract") => {
    if (!subtractActive && mode === "subtract") {
      return;
    }

    setQty((current) => (mode === "subtract" ? current - 1 : current + 1));
  };

  return (
    <Container>
      <QtyContainer>
        <button
          disabled={!subtractActive}
          type="button"
          onClick={() =>
            subtractActive ? buttonOnClick("subtract") : () => {}
          }
        >
          <RiSubtractFill size={15} />
        </button>
        <input type="text" value={qty} className={poppins.className} />
        <button type="button" onClick={() => buttonOnClick("add")}>
          <AiOutlinePlus size={15} />
        </button>
      </QtyContainer>
    </Container>
  );
}
