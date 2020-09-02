import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"

function TransactionList() {
    const {state}= useContext(GlobalContext);
    console.log(state.transactions)
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {state.transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}  />
                ))}
            </ul>
        </>
    )
}

export default TransactionList
