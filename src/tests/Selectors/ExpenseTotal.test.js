import ExpensesTotal from '../../selectors/ExpenseTotal'
import expenses from '../fixtures/expenses'

test('Should Check for zero expense',()=>{
    const result=ExpensesTotal([])
    expect(result).toBe(0)
})

test('Should Check for single Expense',()=>{
    const result=ExpensesTotal([expenses[1]])
    expect(result).toBe(23000)
})

test('Should Check for all the Expenses',()=>{
    const result=ExpensesTotal(expenses)
    expect(result).toBe(52400)
})

