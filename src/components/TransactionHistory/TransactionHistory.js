import React from 'react';
import css from './Transaction.module.css'

const TransactionHistory = ({transaction}) => {
  return (
      <table className={css.transactionHistory}>
        <thead className={css.thread}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map(item =>
          <tr className={css.tableList}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
          )}
        </tbody>
      </table>
  )
}

export default TransactionHistory;