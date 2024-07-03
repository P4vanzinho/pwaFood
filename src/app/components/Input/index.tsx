import { bebasNeue, dmsSans, urbanist } from "@/app/fonts";
import { Container } from "./styles";
import {
  MdAlternateEmail,
  MdPhoneAndroid,
  MdOutlinePhoneEnabled,
} from "react-icons/md";

import { PiTextTBold, PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { HiIdentification } from "react-icons/hi";

import { Bs123 } from "react-icons/bs";

type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "cep"
  | "currency"
  | "cpf"
  | "cnpj"
  | "cellphone"
  | string;

type InputProps = {
  valuesCallback?: (
    original: string | number | readonly string[],
    masked: string | number | readonly string[],
  ) => void;
  label?: string;
  type: HTMLInputTypeAttribute;
  isPublicAuth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

type Icon = Partial<Record<HTMLInputTypeAttribute, JSX.Element>>;

type MaskByType = Partial<
  Record<HTMLInputTypeAttribute, (value: string) => string>
>;

export default function Input({
  isPublicAuth,
  label,
  value,
  ...rest
}: InputProps) {
  const icon: Icon = {
    password: <MdAlternateEmail />,
    email: <MdAlternateEmail />,
    tel: <MdOutlinePhoneEnabled />,
    text: <PiTextTBold />,
    cellphone: <MdPhoneAndroid />,
    cpf: <HiIdentification />,
    cep: <Bs123 />,
    currency: <PiCurrencyDollarSimpleFill />,
  };

  const maskByType: MaskByType = {
    cep: (value: string) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
    },
    currency: (value: string) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d+)(\d{2})$/, "$1,$2")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
    cpf: (value: string) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    },
    cnpj: (value: string) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    },
    cellphone: (value: string) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    },
    date: (value: string) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1");
    },
  };

  const maskValueByType = (
    value?: string | number | readonly string[],
    type?: HTMLInputTypeAttribute,
  ) => {
    if (!type) {
      return value;
    }

    if (!value) {
      return "";
    }

    const fn = maskByType[type];
    const result = fn ? fn(String(value)) : value;

    return result;
  };

  return (
    <Container type={rest.type} isPublicAuth={isPublicAuth}>
      <label className={urbanist.className}>
        {label} {rest.required && "*"}
      </label>

      <div>
        <input
          {...rest}
          value={maskValueByType(value, rest.type)}
          type={rest.type}
          className={urbanist.className}
        ></input>
        {icon[rest.type] && <div>{icon[rest.type]}</div>}
      </div>
    </Container>
  );
}
