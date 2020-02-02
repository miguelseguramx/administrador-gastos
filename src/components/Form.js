import React, { useState, useEffect} from 'react'
import Error from './Error'
import shortid from 'shortid'

function Form(props) {
    
   const { setFlow, setCreateFlow, flowtype, setFlowtype } = props

   const [ flowName, setFlowName ] = useState('')
   const [ flowAmount, setFlowAmount ] =  useState(0)
   const [ error, setError ] = useState(false)

   // This is to avoid the value of NaN if you delete the cero
   // This is not part of the course
   useEffect(()=>{
      if(isNaN(flowAmount)){
         setFlowAmount(0)
      }
   }, [flowAmount])

   const addFlow = e =>{
      e.preventDefault()
      // Validate the input 
      if (flowAmount <= 0 || isNaN(flowAmount)){
         setError(true)
         return
      }
      // Create a cash flow object
      const flow = {
         name: flowName,
         amount: flowAmount,
         type: flowtype,
         id: shortid.generate()
      }

      // Save the flow on the principal component
      setFlow(flow)
      setCreateFlow(true)

      // Delete alert
      setError(false)

      // Reset the form
      setFlowName('')
      setFlowAmount('')
      setFlowtype('none')
   }

   return(
      <form
         onSubmit={addFlow}
      >
         <h2>{flowtype === 'expense' ? 'Agregar gasto' : 'Agregar ingreso'}</h2>
         
         { error ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}

         <div className="camp">
               <label htmlFor="expense-name">{flowtype === 'expense' ? '¿En que gastaste?' : '¿Que recibiste?'}</label>
               <input 
                  id="expense-name"
                  type="text"
                  className="u-full-width"
                  placeholder="Ej. Transporte"
                  onChange={ e => setFlowName(e.target.value)}
                  value={flowName}
               ></input>
         </div>
         <div className="camp">
               <label htmlFor="expense-cost">{flowtype === 'expense' ? '¿Cuanto gastaste?' : '¿Cuanto recibiste?'}</label>
               <input 
                  id="expense-cost"
                  type="text"
                  className="u-full-width"
                  placeholder="Ej. Transporte"
                  onChange={ e => setFlowAmount(parseInt(e.target.value, 10))}
                  value={flowAmount}
               ></input>
         </div>
         <input type="submit" className="button-primary u-full-width" value={flowtype === 'expense' ? 'Agregar gasto' : 'Agregar ingreso'}/>
      </form>
   )
}

export default Form