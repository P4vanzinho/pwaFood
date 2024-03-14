import { poppins } from "@/app/fonts";
import { Container, Input } from "./styles";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type InputQtyProps = {
  initialValue?: number;
  callback: (value: number) => void;
};

export default function InputQty({ initialValue, callback }: InputQtyProps) {
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
      <span className={poppins.className}>QUANTIDADE</span>
      <Input>
        <input
          className={poppins.className}
          type="number"
          name="number"
          id="number"
          value={qty}
        />

        <div>
          <button
            disabled={!subtractActive}
            type="button"
            onClick={() =>
              subtractActive ? buttonOnClick("subtract") : () => {}
            }
          >
            <AiOutlineMinus size={20} />
          </button>
          <button type="button" onClick={() => buttonOnClick("add")}>
            <AiOutlinePlus size={20} />
          </button>
        </div>
      </Input>
    </Container>
  );
}
