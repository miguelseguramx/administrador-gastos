import React from 'react';

function Expense({expense}) {
    
    // const deleteExpense = (id) =>{
        
    // }

    return (
        <li className="expense">
            <p>
                {expense.name}
                <span className="expense">${expense.amount}</span>
                {/* <button type="button"
                    onClick={()=>deleteExpense(expense.id)}
                >Eliminar</button> */}
            </p>
        </li>
)}

export default Expense;