import React from 'react';

function Flow({flow}) {
  
  // const deleteFlow = (id) =>{
      
  // }
  
  const reactiveClass = flow.type === 'expense' ? 'expense' : 'income' 

  return (
      <li className="expense">
          <p>
              {flow.name}
              <span className={`flow ${reactiveClass}`}>
                  {flow.type === 'expense' ? '-' : '+' } ${flow.amount}
              </span>
              {/* <button type="button"
                  onClick={()=>deleteFlow(expense.id)}
              >Eliminar</button> */}
          </p>
      </li>
)}

export default Flow;