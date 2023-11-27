'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';
import { FoodApiOrder } from '../../types/foodApi';

type OrderContextProps = {
  current: FoodApiOrder | null;
  setCurrent: React.Dispatch<React.SetStateAction<FoodApiOrder | null>>;
};

const defaultValue = {
  current: null,
  setCurrent: () => {},
};

const OrderContext = createContext<OrderContextProps>(defaultValue);

type OrderContextProviderProps = {
  children: ReactNode;
};

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const [current, setCurrent] = useState<FoodApiOrder | null>(
    defaultValue.current,
  );

  return (
    <OrderContext.Provider
      value={{
        current,
        setCurrent,
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
