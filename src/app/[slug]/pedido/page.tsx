"use client";

import Title from "@/app/components/Title";
import { theme } from "@/app/styles/theme";
import {
  Container,
  AllStatusContainer,
  VerticalSeparator,
  StatusContainer,
  ConditionalBorderImageContainer,
  StatusAndDeliveryDataContainer,
  Footer,
} from "./styles";

import { poppins } from "@/app/fonts";
import { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import DeliveryData from "@/app/components/DeliveryData";

type PedidoStatusProps = {
  params: {
    status: "sucesso" | "erro";
  };
};
type StatusType = string;

export default function PedidoStatus({ params }: PedidoStatusProps) {
  const [currentStatus, setCurrentStatus] = useState<StatusType>("sent");
  const user = { name: "Thiago Pavan da Silva", whatsapp: 6298545234 };
  const radioSelected = "delivery";

  //Alterne statusText "sent"; "confirmed";"on-the-way"; "finished" para ver alterações no layout.
  const getStatusResp = { timing: "19:30", statusText: "finished" };

  const renderConfirmedStatus =
    currentStatus === "confirmed" ||
    currentStatus === "on-the-way" ||
    currentStatus === "finished";

  const renderOnTheWayStatus =
    currentStatus === "on-the-way" || currentStatus === "finished";

  const renderFinishedStatus = currentStatus === "finished";

  const isCurrentStatusSent = currentStatus === "sent";
  const isCurrentStatusConfirmed = currentStatus === "confirmed";
  const isCurrentStatusOnTheWay = currentStatus === "on-the-way";
  const isCurrentStatusFinished = renderFinishedStatus;

  useEffect(() => {
    switch (getStatusResp.statusText) {
      case "sent":
        setCurrentStatus("sent");
        break;
      case "confirmed":
        setCurrentStatus("confirmed");
        break;
      case "on-the-way":
        setCurrentStatus("on-the-way");
        break;
      case "finished":
        setCurrentStatus("finished");
        break;
      default:
        setCurrentStatus("sent");
        break;
    }
  }, [getStatusResp.statusText]);

  return (
    <Container>
      <Title>Andamento do pedido</Title>
      <StatusAndDeliveryDataContainer>
        <AllStatusContainer>
          {getStatusResp && (
            <>
              <StatusContainer isCurrentStatus={isCurrentStatusSent}>
                <ConditionalBorderImageContainer
                  isCurrentStatus={isCurrentStatusSent}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke={
                        isCurrentStatusSent
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9547 7.03529C16.31 6.38735 15.5423 5.87369 14.6961 5.52425C13.85 5.17482 12.9424 4.99662 12.0264 5.00005C8.18797 5.00005 5.05977 8.11329 5.05625 11.9353C5.05625 13.1594 5.37795 14.3503 5.98531 15.4046L5 19L8.69513 18.0358C9.7169 18.5907 10.8624 18.8811 12.0264 18.8801H12.0299C15.8692 18.8801 18.9965 15.7669 19 11.9414C19.0008 11.0297 18.8204 10.1269 18.4692 9.28486C18.118 8.44285 17.6039 7.67832 16.9547 7.03529ZM12.0264 17.7059C10.9885 17.7051 9.96981 17.4271 9.07659 16.9009L8.86564 16.7749L6.67353 17.3471L7.25891 15.2183L7.1218 14.9986C6.54152 14.0802 6.23462 13.0168 6.23669 11.9318C6.23669 8.75904 8.83576 6.17079 12.0299 6.17079C12.7908 6.16944 13.5445 6.31803 14.2475 6.60802C14.9505 6.89801 15.5889 7.32366 16.1258 7.86041C16.6645 8.39517 17.0916 9.03076 17.3825 9.73057C17.6733 10.4304 17.8222 11.1806 17.8204 11.9379C17.8169 15.122 15.2179 17.7059 12.0264 17.7059ZM15.2038 13.3886C15.0306 13.302 14.1754 12.8829 14.0146 12.8234C13.8546 12.7665 13.7377 12.7368 13.6234 12.91C13.5065 13.0824 13.1725 13.4753 13.0723 13.5881C12.9721 13.7045 12.8684 13.7176 12.6944 13.6319C12.5212 13.5444 11.9596 13.3624 11.2951 12.77C10.7765 12.3106 10.4293 11.7419 10.3256 11.5695C10.2254 11.3963 10.3159 11.3035 10.4029 11.2169C10.4794 11.1399 10.5761 11.0139 10.6631 10.9142C10.751 10.8144 10.78 10.7409 10.8371 10.6254C10.8943 10.5082 10.867 10.4084 10.824 10.3218C10.78 10.2352 10.4328 9.38028 10.286 9.03553C10.1454 8.69516 10.0021 8.74241 9.8949 8.73804C9.7947 8.73191 9.6778 8.73191 9.5609 8.73191C9.47263 8.73415 9.38577 8.7545 9.30577 8.79168C9.22576 8.82887 9.15432 8.8821 9.09593 8.94803C8.93596 9.12128 8.48857 9.54041 8.48857 10.3953C8.48857 11.2502 9.11263 12.0718 9.20053 12.1881C9.28666 12.3045 10.4258 14.0536 12.174 14.8061C12.5871 14.9855 12.9124 15.0914 13.1664 15.1719C13.5839 15.3049 13.9609 15.2848 14.2615 15.2419C14.5956 15.1911 15.2908 14.8219 15.4376 14.4168C15.5817 14.0108 15.5817 13.6643 15.5378 13.5916C15.4947 13.5181 15.3778 13.4753 15.2038 13.3886Z"
                      fill={
                        isCurrentStatusSent
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                    />
                  </svg>
                </ConditionalBorderImageContainer>
                <span
                  className={poppins.className}
                >{`${getStatusResp.timing} - Enviado`}</span>
              </StatusContainer>
              {renderConfirmedStatus && <VerticalSeparator />}
            </>
          )}

          {renderConfirmedStatus && (
            <>
              <StatusContainer isCurrentStatus={isCurrentStatusConfirmed}>
                <ConditionalBorderImageContainer
                  isCurrentStatus={isCurrentStatusConfirmed}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.37 8.88H17.62"
                      stroke={
                        isCurrentStatusConfirmed
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38 8.88L7.13 9.63L9.38 7.38"
                      stroke={
                        isCurrentStatusConfirmed
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.37 15.88H17.62"
                      stroke={
                        isCurrentStatusConfirmed
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38 15.88L7.13 16.63L9.38 14.38"
                      stroke={
                        isCurrentStatusConfirmed
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke={
                        isCurrentStatusConfirmed
                          ? theme.COLORS.DARK
                          : theme.COLORS.GRAY
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ConditionalBorderImageContainer>
                <span
                  className={poppins.className}
                >{`${getStatusResp.timing} - Confirmado`}</span>
              </StatusContainer>
              {renderOnTheWayStatus && <VerticalSeparator />}
            </>
          )}

          {renderOnTheWayStatus && (
            <>
              <StatusContainer isCurrentStatus={isCurrentStatusOnTheWay}>
                <ConditionalBorderImageContainer
                  isCurrentStatus={isCurrentStatusOnTheWay}
                >
                  <div>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.49939 0.444458C3.49939 0.32658 3.54549 0.213531 3.62754 0.130179C3.7096 0.0468268 3.82089 0 3.93693 0H5.24953C5.36557 0 5.47686 0.0468268 5.55891 0.130179C5.64097 0.213531 5.68706 0.32658 5.68706 0.444458C5.68706 0.562335 5.64097 0.675385 5.55891 0.758737C5.47686 0.842089 5.36557 0.888916 5.24953 0.888916V1.33337H8.87231L9.21009 0.304009C9.23909 0.215543 9.29475 0.138583 9.36919 0.0840246C9.44363 0.0294658 9.53308 7.07992e-05 9.62487 0H10.4999C10.616 0 10.7273 0.0468268 10.8093 0.130179C10.8914 0.213531 10.9375 0.32658 10.9375 0.444458C10.9375 0.562335 10.8914 0.675385 10.8093 0.758737C10.7273 0.842089 10.616 0.888916 10.4999 0.888916H9.93989L9.66775 1.72005L10.3739 2.86675C10.9825 2.61182 11.6631 2.59842 12.2808 2.8292C12.8986 3.05998 13.4086 3.5181 13.7095 4.11277C14.0105 4.70745 14.0805 5.39527 13.9058 6.03995C13.7311 6.68462 13.3243 7.23909 12.7661 7.59348C12.208 7.94787 11.5391 8.07631 10.8921 7.95336C10.245 7.8304 9.6671 7.46502 9.27278 6.92962C8.87845 6.39422 8.69652 5.72787 8.76302 5.06263C8.82953 4.3974 9.13963 3.78181 9.63187 3.33788L9.18734 2.61608L7.37069 5.56906C7.33136 5.63298 7.27667 5.68569 7.21177 5.72224C7.14686 5.75878 7.07387 5.77795 6.99966 5.77795H5.21365C5.1229 6.32303 4.86763 6.82599 4.48316 7.21724C4.09869 7.60849 3.60402 7.8687 3.0676 7.96186C2.53117 8.05502 1.9795 7.97653 1.48891 7.73725C0.998325 7.49796 0.593068 7.10972 0.329208 6.62622C0.0653492 6.14272 -0.0440685 5.58788 0.0160932 5.03845C0.0762548 4.48901 0.303022 3.97215 0.665021 3.55937C1.02702 3.14659 1.50636 2.8583 2.03672 2.73437C2.56708 2.61045 3.12224 2.65702 3.6254 2.86764L4.37446 1.64983V0.888916H3.93693C3.82089 0.888916 3.7096 0.842089 3.62754 0.758737C3.54549 0.675385 3.49939 0.562335 3.49939 0.444458ZM4.812 2.61608L4.36746 3.33966C4.80499 3.73433 5.11127 4.27657 5.21365 4.88904H6.21035L4.812 2.61608ZM6.99966 4.49525L8.39802 2.22229H5.60131L6.99966 4.49525ZM4.31933 4.88904C4.24478 4.59662 4.09812 4.32832 3.89317 4.10946L3.41364 4.88904H4.31933ZM3.15199 3.63744C2.81816 3.53035 2.46039 3.52742 2.12491 3.62903C1.78942 3.73064 1.49165 3.93211 1.27006 4.20742C1.04846 4.48273 0.913244 4.81922 0.881868 5.17341C0.850492 5.5276 0.924402 5.8832 1.09405 6.19427C1.26369 6.50535 1.52128 6.75759 1.83351 6.91841C2.14575 7.07923 2.49829 7.14123 2.84558 7.0964C3.19286 7.05157 3.51893 6.90197 3.78165 6.66694C4.04437 6.43191 4.23167 6.12224 4.31933 5.77795H2.62433C2.54622 5.77795 2.46955 5.75672 2.40225 5.71645C2.33496 5.67618 2.2795 5.61835 2.24164 5.54895C2.20378 5.47956 2.18489 5.40114 2.18694 5.32183C2.18899 5.24252 2.2119 5.16521 2.2533 5.09793L3.15199 3.63744ZM10.1062 4.10857C9.81284 4.42236 9.64226 4.83404 9.62638 5.26645C9.6105 5.69886 9.75041 6.12232 10.0199 6.45743C10.2894 6.79255 10.6699 7.01632 11.0902 7.08681C11.5105 7.1573 11.9416 7.06967 12.3029 6.84033C12.6641 6.61099 12.9306 6.2557 13.0524 5.84105C13.1742 5.4264 13.1429 4.98087 12.9645 4.58796C12.786 4.19504 12.4726 3.88173 12.083 3.70675C11.6934 3.53176 11.2544 3.50712 10.8482 3.63744L11.746 5.09793C11.7765 5.14743 11.797 5.20253 11.8065 5.2601C11.816 5.31766 11.8143 5.37656 11.8013 5.43343C11.7884 5.49031 11.7646 5.54404 11.7312 5.59156C11.6979 5.63908 11.6556 5.67946 11.6069 5.71039C11.5582 5.74133 11.5039 5.76221 11.4473 5.77185C11.3906 5.78149 11.3326 5.77969 11.2766 5.76657C11.2206 5.75345 11.1677 5.72925 11.121 5.69536C11.0742 5.66147 11.0344 5.61855 11.004 5.56906L10.1062 4.10857Z"
                        fill={
                          isCurrentStatusOnTheWay
                            ? theme.COLORS.DARK
                            : theme.COLORS.GRAY
                        }
                      />
                    </svg>
                  </div>
                </ConditionalBorderImageContainer>
                <span
                  className={poppins.className}
                >{`${getStatusResp.timing} - A caminho`}</span>
              </StatusContainer>

              {renderFinishedStatus && <VerticalSeparator />}
            </>
          )}

          {renderFinishedStatus && (
            <StatusContainer isCurrentStatus={isCurrentStatusFinished}>
              <ConditionalBorderImageContainer
                isCurrentStatus={isCurrentStatusFinished}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke={
                      isCurrentStatusFinished
                        ? theme.COLORS.DARK
                        : theme.COLORS.GRAY
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke={
                      isCurrentStatusFinished
                        ? theme.COLORS.DARK
                        : theme.COLORS.GRAY
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ConditionalBorderImageContainer>
              <span
                className={poppins.className}
              >{`${getStatusResp.timing} - Finalizado`}</span>
            </StatusContainer>
          )}
        </AllStatusContainer>

        <DeliveryData />
      </StatusAndDeliveryDataContainer>

      <Footer>
        <Button text="Fazer novo pedido" />
      </Footer>
    </Container>
  );
}
