import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Item = {
  qty: number;
  id: string;
  unityPrice: number;
  photo?: string;
  title: string;
};

type BagContextProps = {
  itens: Item[];
  setItens: React.Dispatch<React.SetStateAction<Item[]>>;
  addItem: (item: Item) => void;
  editItem: (item: Item) => void;
  removeItemByIndex: (id: number) => void;
  total: number;
};

const defaultTotal = 0;

const defaultValue = {
  itens: [],
  total: defaultTotal,
  setItens: () => {},
  addItem: () => {},
  editItem: () => {},
  removeItemByIndex: (_: number) => {},
};

const BagContext = createContext<BagContextProps>(defaultValue);

type BagContextProviderProps = {
  children: ReactNode;
};

const BagContextProvider = ({ children }: BagContextProviderProps) => {
  const [itens, setItens] = useState<Item[]>(defaultValue.itens);
  const [total, setTotal] = useState(defaultTotal);

  const addItem = (item: Item) => {
    setItens(current => [...current, item]);
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

  const removeItemByIndex = useCallback((index: number) => {
    setItens(currentItems => {
      const newItems = currentItems.filter((_, i) => i !== index);

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
        removeItemByIndex,
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
