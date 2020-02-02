import React, { useState, useEffect } from 'react';
import AskUser from './components/AskUser'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl';

function App() {
  const [ budget, setBudget ] = useState(0) 
  const [ remaining, setRemaining ] = useState(0);
  const [ askBudget, setAskBudget] =  useState(true)
  const [ createFlow, setCreateFlow] = useState(false)
  const [ flowtype, setFlowtype] = useState('none')
  const [ flow, setFlow ] = useState({})
  const [ flows, setFlows ] = useState([])

  useEffect(()=>{
    if(createFlow){
      const flowList = [...flows, flow]
      setFlows(flowList)

      // Rest the budget
      const remainingBudget = flow.type === 'expense' ? remaining - flow.amount : remaining + flow.amount
      // Save the remaining budget
      setRemaining(remainingBudget)

      setCreateFlow(false)
    }
  }, [createFlow, flow, flows, remaining])

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
                  { (flowtype === 'none') ? 
                    <>
                      <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Agregar gasto"
                        onClick={() => setFlowtype('expense')}/>
                      <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Agregar ingreso"
                        onClick={() => setFlowtype('income')}/>
                    </> : 
                    <Form
                      setFlow={setFlow}
                      setCreateFlow={setCreateFlow}
                      flowtype={flowtype}
                      setFlowtype={setFlowtype}
                    >
                    </Form>
                  }
                </div>
                <div className="one-half column">
                  <List
                    flows={flows}
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
