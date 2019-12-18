import React from 'react'
import Expense from './Expense'

function List({expenses}) {
    return(
        <div className="realized-expenses">
            <h2>Listado</h2>
            {
                expenses.map( expense =>(
                    <Expense
                        key={expense.id}
                        expense={expense}
                    ></Expense>
                ))
            }
        </div>
    )
}

export default List