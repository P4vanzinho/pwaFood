'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

type LoadingContextProviderProps = {
  children: ReactNode
}

type LoadingContextProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
}

const defaultLoading = false

const defaultValue = {
  setLoading: () => {},
  loading: defaultLoading,
}

const LoadingContext = createContext<LoadingContextProps>(defaultValue)

const LoadingContextProvider = ({ children }: LoadingContextProviderProps) => {
  const [loading, setLoading] = useState(defaultLoading)

  return (
    <LoadingContext.Provider
      value={{
        setLoading,
        loading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoadingContext = () => {
  return useContext(LoadingContext)
}

export { LoadingContextProvider }
export default LoadingContext
