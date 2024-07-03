import { ReactNode } from "react";
import { poppins, urbanist } from "@/app/fonts";
import { Container } from "./styles";
import classnames from "classnames";

type ButtonRegistrationType = {
  text: string;
  loading?: boolean;
  selected?: boolean;
  enabledSelect?: boolean;
  typeOfButton?: "default" | "delete" | "submit";
  disabled?: boolean;
  isPublicAuth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  loading,
  isPublicAuth,
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
      isPublicAuth={isPublicAuth}
    >
      <button
        type="button"
        {...rest}
        disabled={disabled}
        className={isPublicAuth ? urbanist.className : poppins.className}
      >
        {text}
      </button>
    </Container>
  );
}
