import React from 'react'
import { createContext } from 'react'

export const AppContext = createContext();
export const AppContextProvideer = ({children}) => {
 return (<>
  <AppContext.Provider value={{}}> 
    {children}
  </AppContext.Provider>
 </>)
}