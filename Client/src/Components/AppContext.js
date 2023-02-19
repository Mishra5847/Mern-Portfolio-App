import React, { createContext, useState } from 'react'


const Context = createContext();

function AppProvider({children}) {
    const [login, setLogin] = useState(true);

  return (
        <Context.Provider value={{login, 
                                  setLogin}}>
            {children}
        </Context.Provider>
  )
}

export {Context, AppProvider}