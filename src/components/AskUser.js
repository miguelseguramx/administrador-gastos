import React, { Fragment, useState } from "react";
import Error from './Error'

function AskUser(props) {

   const { setBudget, setAskBudget, setRemaining } = props

   const [ amount, setAmount ] = useState(0)
   const [ error, setError] =  useState(false)

   const addBudget = e => {
      e.preventDefault()
      // Validate the input 
      if (amount <= 0 || isNaN(amount)){
         setError(true)
         return
      }
      // Delete alert
      setError(false)
      // Set the initial budget 
      setBudget(amount)
      // Delete the AskUser component
      setAskBudget(false)
      // Set the remaining budget
      setRemaining(amount)

   }

   return (
      <Fragment>
         <h2>¿Cual es tu presupuesto?</h2>
         { error ? <Error message="El presupuesto es incorrecto"/> : null}
         <form
            onSubmit={addBudget}
         >
            <input 
               type="text" 
               className="u-full-width"
               placeholder='Agrega tu presupuesto'
               onChange={e => setAmount(parseInt(e.target.value,10))}
            />
            <input 
               type="submit" 
               className="button-primary u-full-width" 
               value="Define un presupuesto"
            />
         </form>
      </Fragment>
   )
}

export default AskUser