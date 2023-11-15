import React, { ReactNode, createContext, useState } from 'react';

type AppType = {
  slug: string;
};

type AppContextProps = {
  appState: AppType;
  setAppState: React.Dispatch<React.SetStateAction<AppType>>;
};

const defaultValue = {
  appState: {
    slug: '',
  },
  setAppState: () => {},
};

const AppContext = createContext<AppContextProps>(defaultValue);

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [appState, setAppState] = useState(defaultValue.appState);

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
