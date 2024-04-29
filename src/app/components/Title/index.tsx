import { ReactNode } from "react";
import { bebasNeue, dmsSans } from "@/app/fonts";
import { Text } from "./styles";

interface ButtonRegistrationType {
  children: ReactNode;
}

export default function Title({ children }: ButtonRegistrationType) {
  return <Text className={dmsSans.className}>{children}</Text>;
}
