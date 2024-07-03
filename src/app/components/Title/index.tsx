import { ReactNode } from "react";
import { bebasNeue, dmsSans, urbanist } from "@/app/fonts";
import { Text } from "./styles";

interface ButtonRegistrationType {
  children: ReactNode;
  isPublicAuth?: boolean;
}

export default function Title({
  isPublicAuth,
  children,
}: ButtonRegistrationType) {
  return (
    <Text className={isPublicAuth ? urbanist.className : dmsSans.className}>
      {children}
    </Text>
  );
}
