"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { FoodApiBusiness } from "../../types/foodApi";

type OrderItem = {
  price: number;
  productId: string | number;
  qty: number;
};

type CurrentOrder = {
  total?: number;
  deliveryFee?: number;
  user?: {
    whatsapp?: string;
    name?: string;
    address?: {
      street?: string;
      state?: string;
      number?: string;
      city?: string;
      cep?: string;
      neighborhood?: string;
      addressDetails?: string;
    };
  };
  businessId?: string;
  items?: OrderItem[];
  business?: Partial<FoodApiBusiness>;
  id?: string;
};

type OrderContextProps = {
  currentOrder: CurrentOrder | null;
  setCurrentOrder: React.Dispatch<React.SetStateAction<CurrentOrder | null>>;
};

const defaultValue = {
  currentOrder: null,
  setCurrentOrder: () => {},
};

const OrderContext = createContext<OrderContextProps>(defaultValue);

type OrderContextProviderProps = {
  children: ReactNode;
};

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const [currentOrder, setCurrentOrder] = useState<CurrentOrder | null>(
    defaultValue.currentOrder,
  );

  return (
    <OrderContext.Provider
      value={{
        currentOrder,
        setCurrentOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};

export { OrderContextProvider };
export default OrderContext;
