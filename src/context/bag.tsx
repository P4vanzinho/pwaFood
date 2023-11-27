'use client';

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { v4 as uuid } from 'uuid';

export type Item = {
  id?: string;
  productId: number;
  qty: number;
  unityPrice: number;
  photo?: string;
  title: string;
};

type BagContextProps = {
  itens: Item[];
  setItens: React.Dispatch<React.SetStateAction<Item[]>>;
  addItem: (item: Item) => void;
  editItem: (item: Item) => void;
  removeItem: (id: string) => void;
  total: number;
};

const defaultTotal = 0;

const defaultValue = {
  itens: [],
  total: defaultTotal,
  setItens: () => {},
  addItem: () => {},
  editItem: () => {},
  removeItem: (_: string) => {},
};

const BagContext = createContext<BagContextProps>(defaultValue);

type BagContextProviderProps = {
  children: ReactNode;
};

const BagContextProvider = ({ children }: BagContextProviderProps) => {
  const [itens, setItens] = useState<Item[]>(defaultValue.itens);
  const [total, setTotal] = useState(defaultTotal);

  const addItem = (item: Item) => {
    const itemWithId = {
      ...item,
      id: uuid(),
    };

    setItens(current => [...current, itemWithId]);
  };

  const editItem = useCallback((item: Item) => {
    setItens(currentItems => {
      return currentItems.map(currentItem => {
        if (currentItem.id === item.id) {
          const itemEdited = {
            ...currentItem,
            ...item,
          };

          return itemEdited;
        } else {
          return currentItem;
        }
      });
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItens(currentItems => {
      const newItems = currentItems.filter(item => (item.id as string) !== id);

      return newItems;
    });
  }, []);

  useEffect(() => {
    let total = 0;

    itens.forEach(item => {
      total = total + item.unityPrice * item.qty;
    });

    setTotal(total);
  }, [itens]);

  return (
    <BagContext.Provider
      value={{
        itens,
        setItens,
        addItem,
        removeItem,
        editItem,
        total,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => {
  return useContext(BagContext);
};

export { BagContextProvider };
export default BagContext;
