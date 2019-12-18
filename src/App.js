import React, { useState, useEffect } from 'react';
import AskUser from './components/AskUser'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl';

function App() {

  const [ budget, setBudget ] = useState(0) 
  const [ remaining, setRemaining ] = useState(0);
  const [ askBudget, setAskBudget] =  useState(true)
  const [ createExpense, setCreateExpense] = useState(false)
  const [ expense, setExpense ] = useState({})
  const [ expenses, setExpenses ] = useState([])

  useEffect(()=>{
    if(createExpense){
      const expenseList = [...expenses, expense]
      setExpenses(expenseList)

      // Rest the budget
      const remainingBudget = remaining - expense.amount
      // Save the remaining budget
      setRemaining(remainingBudget)

      setCreateExpense(false)
    }
  }, [createExpense, expense, expenses, remaining])

  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="content content-principal">
          {
            (askBudget) 
            ?
              <AskUser
                setBudget={setBudget}
                setAskBudget={setAskBudget}
                setRemaining={setRemaining}
              ></AskUser>
            :(
              <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  >
                  </Form>
                </div>
                <div className="one-half column">
                  <List
                    expenses={expenses}
                  >
                  </List>
                  <BudgetControl
                    budget={budget}
                    remaining={remaining}
                  ></BudgetControl>
                </div>
              </div>
            )
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;
