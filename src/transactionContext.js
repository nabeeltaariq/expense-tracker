import React, { createContext, useReducer } from 'react'
import TransactionReducer from './transactionReducer'
const initialTransactions = [
  { amount: 500, desc: 'Cash' },
  { amount: -40, desc: 'Food' },
  { amount: -100, desc: 'Rent' },
]

export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialTransactions)
  function addTransaction(transObj) {
    dispatch({
      type: 'ADD',
      payload: { amount: transObj.amount, desc: transObj.desc },
    })
  }

  return (
    <TransactionContext.Provider
      value={{ transaction: state, addTransaction: addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
