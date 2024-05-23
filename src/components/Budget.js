import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.cost, 0);
    const [newBudget, setNewBudget] = useState(budget);
    if (newBudget > 20000) {
        alert("The value cannot exceed 20,000")
        setNewBudget(2000)
        return;
    }
    
    if (newBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending")
        setNewBudget(2000)
        return;
    }

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;