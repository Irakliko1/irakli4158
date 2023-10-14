// import React, { createContext, useReducer, useContext, useState } from 'react';

// const initialState = { isLoggedIn: true };

// const reducer = (action, state) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { isLoggedIn: true };
//       case 'LOGOUT':
//           return { isLoggedIn: false };
//     default:
//         return state;
//   }

// };

// const GlobalStateContext = createContext();

// export const GlobalStateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <GlobalStateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

// export const useGlobalState = () => {
//   const context = useContext(GlobalStateContext);
//   if (!context) {
//     throw new Error('useGlobalState must be used within a GlobalStateProvider');
//   }
//   return context;
// };
