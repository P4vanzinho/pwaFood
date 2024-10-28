import { ReactNode } from "react";
import { poppins, urbanist } from "@/app/fonts";
import { Container, ChangeLink } from "./styles";

export default function DeliveryData() {
  const user = { name: "Thiago Pavan da Silva", whatsapp: 6298545234 };
  const radioSelected = "delivery";
  return (
    <Container>
      <div>
        <label className={poppins.className}>Dados de entrega</label>
        {radioSelected === "delivery" && (
          <ChangeLink
            className={poppins.className}
            href={``}
            ///${params?.slug}/checkout/entrega/alterar
          ></ChangeLink>
        )}
      </div>

      {user && (
        <section className={poppins.className}>
          <p>{user?.name}</p>

          <div>
            <p>
              Km 5 refinery road oppsite re public road, effurun, delta state
            </p>
          </div>

          <p>{user?.whatsapp ?? ""}</p>
        </section>
      )}
    </Container>
  );
}
