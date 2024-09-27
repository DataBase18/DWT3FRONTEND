

import React, { createContext, useState } from 'react';

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  
  const [user, setUser] = useState();
 
   const contextValue = { 
    user,
    setUser
  };

  return (
    <SessionContext.Provider 
      value={ contextValue  }
    >
      {children}
    </SessionContext.Provider>
  );
};
