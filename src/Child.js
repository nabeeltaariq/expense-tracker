import React, { useContext, useState } from 'react'
import { TransactionContext } from './transactionContext'
function Child() {
  let transactions = useContext(TransactionContext)

  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState(0)

  const handleAddition = (event) => {
    event.preventDefault()
    transactions.addTransaction({
      amount: amount,
      desc: desc,
    })
  }
  return (
    <div className='container'>
      <h1 className='text-center'>Expense Tracker</h1>
      <h3>
        Expense Balance <br /> $260
      </h3>
      <div className='expense-container'>
        <h3>
          INCOME <br /> $500.00
        </h3>
        <h3>
          EXPENSE <br /> $240.00
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <div>
        <ul className='transaction-list'>
          {transactions.transaction.map((transaction) => (
            <li key={transaction.amount}>
              <span>{transaction.desc} </span>
              <span>{transaction.amount}</span>
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
          onChange={(e) => setDesc(e.target.value)}
          type='text'
          name='desc'
          required
        />
        <br />
        <label>Enter Amount</label>
        <br />
        <input
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
