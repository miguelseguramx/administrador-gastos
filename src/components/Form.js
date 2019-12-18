import React, { useState, useEffect} from 'react'
import Error from './Error'
import shortid from 'shortid'

function Form(props) {
    
   const { setExpense, setCreateExpense} = props

   const [ expenseName, setExpenseName ] = useState('')
   const [ expenseAmount, setExpenseAmount ] =  useState(0)
   const [ error, setError ] = useState(false)

   // This is to avoid the value of NaN if you delete the cero
   // This is not part of the course
   useEffect(()=>{
      if(isNaN(expenseAmount)){
         setExpenseAmount(0)
      }
   }, [expenseAmount])

   const addExpense = e =>{
      e.preventDefault()
      // Validate the input 
      if (expenseAmount <= 0 || isNaN(expenseAmount)){
         setError(true)
         return
      }
      // Create a expense object
      const expense = {
         name: expenseName,
         amount: expenseAmount,
         id: shortid.generate()
      }

      // Save the expnse on the principal component
      setExpense(expense)
      setCreateExpense(true)

      // Delete alert
      setError(false)

      // Reset the form
      setExpenseName('')
      setExpenseAmount('')

   }

   return(
      <form
         onSubmit={addExpense}
      >
         <h2>Agrega tus gastos</h2>
         
         { error ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}

         <div className="camp">
               <label htmlFor="expense-name">¿En que gastaste?</label>
               <input 
                  id="expense-name"
                  type="text"
                  className="u-full-width"
                  placeholder="Ej. Transporte"
                  onChange={ e => setExpenseName(e.target.value)}
                  value={expenseName}
               ></input>
         </div>
         <div className="camp">
               <label htmlFor="expense-cost">¿Cuanto Gastaste?</label>
               <input 
                  id="expense-cost"
                  type="text"
                  className="u-full-width"
                  placeholder="Ej. Transporte"
                  onChange={ e => setExpenseAmount(parseInt(e.target.value, 10))}
                  value={expenseAmount}
               ></input>
         </div>
         <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
      </form>
   )
}

export default Form