import { useEffect, useState } from "react";
import { poppins } from "@/app/fonts";
import { Container } from "./styles";

type RadioButtonProps = {
  id: string;
  checked?: boolean;
  label: string;
  onCallback: (id: string) => void;
};

export default function RadioButton({
  onCallback,
  label,
  id,
  ...rest
}: RadioButtonProps) {
  const onClick = () => {
    onCallback(id);
  };

  return (
    <Container
      className={poppins.className}
      checked={!!rest.checked}
      onClick={onClick}
      key={id}
    >
      <div>
        <div></div>
      </div>
      <span>{label}</span>
    </Container>
  );
}
