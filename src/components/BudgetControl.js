import React, {Fragment} from 'react';
import { reviewBudget } from '../helpers'

const BudgetControl = ({budget, remaining}) => (
    <Fragment>
        <div className="alert alert-primary">
            Presupuesto: $ {budget}
        </div>
        <div className={reviewBudget(budget,remaining)}>
            Restante: $ {remaining}
        </div>
    </Fragment>
)

export default BudgetControl;