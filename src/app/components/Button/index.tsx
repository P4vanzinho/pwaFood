import { ReactNode } from "react";
import { poppins } from "@/app/fonts";
import { Container } from "./styles";
import classnames from "classnames";

type ButtonRegistrationType = {
  text: string;
  loading?: boolean;
  selected?: boolean;
  enabledSelect?: boolean;
  typeOfButton?: "default" | "delete" | "submit";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  loading,
  selected = false,
  enabledSelect = false,
  typeOfButton = "default",
  disabled = false,
  ...rest
}: ButtonRegistrationType) {
  const pLoading = typeof loading !== "boolean" ? false : loading;

  return (
    <Container
      className={poppins.className}
      selected={selected}
      enabledSelect={enabledSelect}
      typeOfButton={typeOfButton}
    >
      <button
        type="button"
        {...rest}
        disabled={disabled}
        className={classnames({
          loading: pLoading,
          [rest.className as string]: true,
        })}
      >
        {text}
      </button>
    </Container>
  );
}
