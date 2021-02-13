import React, { useContext, useEffect, useState } from 'react'
import { TransactionContext } from './transactionContext'
function Child() {
  let transactions = useContext(TransactionContext)

  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')

  const getincome = () => {
    let income = 0

    for (var i = 0; i < transactions.transaction.length; i++) {
      if (transactions.transaction[i].amount > 0) {
        income += transactions.transaction[i].amount
      }
    }
    return income
  }
  const getexpense = () => {
    let expense = 0
    for (var i = 0; i < transactions.transaction.length; i++) {
      if (transactions.transaction[i].amount < 0) {
        expense += transactions.transaction[i].amount
      }
    }
    return expense
  }
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setExpense(getexpense())
    setIncome(getincome())
  }, [])
  const handleAddition = (event) => {
    event.preventDefault()
    transactions.addTransaction({
      amount: Number(amount),
      desc: desc,
    })
    setExpense(getexpense())
    setIncome(getincome())
    setAmount('')
    setDesc('')
  }
  return (
    <div className='container'>
      <h1 className='text-center'>Expense Tracker</h1>
      <h3>
        Expense Balance <br /> ${getincome() + getexpense()}
      </h3>
      <div className='expense-container'>
        <h3>
          INCOME <br /> ${getincome()}
        </h3>
        <h3>
          EXPENSE <br /> -${-getexpense()}
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <div>
        <ul className='transaction-list'>
          {transactions.transaction.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.desc} </span>
              <span>
                {transaction.amount > 0
                  ? '$' + String(`${transaction.amount}`)
                  : '-$' + String(-`${transaction.amount}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <h4>Add new Transaction</h4>
      <hr />
      <form
        className='transaction-form'
        action=''
        onSubmit={handleAddition}
        method='post'
      >
        <label>Enter Description</label>
        <br />
        <input
          value={desc}
          placeholder='Description'
          onChange={(e) => setDesc(e.target.value)}
          type='text'
          name='desc'
          required
        />
        <br />
        <label>Enter Amount</label>
        <br />
        <input
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type='number'
          name='amount'
          required
        />
        <br />
        <input type='submit' value='Add Transaction' />
      </form>
    </div>
  )
}

export default Child
