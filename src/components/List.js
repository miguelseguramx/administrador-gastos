import React from 'react'
import Cashflow from './Cashflow'

function List({flows}) {
    return(
        <div className="realized-expenses">
            <h2>Listado</h2>
            {
                flows.map( flow =>(
                    <Cashflow
                        key={flow.id}
                        flow={flow}
                    ></Cashflow>
                ))
            }
        </div>
    )
}

export default List