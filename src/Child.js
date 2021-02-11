import React from 'react'

function Child() {
  let transactions = [
    { amount: 500, desc: 'Cash' },
    { amount: 40, desc: 'Food' },
    { amount: 100, desc: 'Rent' },
  ]
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
          {transactions.map((transaction) => (
            <li>
              <span>{transaction.desc} </span>
              <span>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <h4>Add new Transaction</h4>
      <hr />
      <form className='transaction-form' action='' method='post'>
        <label>Enter Description</label>
        <br />
        <input type='text' required />
        <br />
        <label>Enter Amount</label>
        <br />
        <input type='number' required />
        <br />
        <input type='submit' value='Add Transaction' />
      </form>
    </div>
  )
}

export default Child
