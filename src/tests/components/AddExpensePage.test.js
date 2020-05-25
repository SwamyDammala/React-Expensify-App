import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {AddexpensePage} from '../../Components/AddExpensePage'


let startAddExpense,history,wrapper

beforeEach(()=>{
    startAddExpense=jest.fn()
    history={'push':jest.fn()}
    wrapper=shallow(<AddexpensePage startAddExpense={startAddExpense} history={history} />)
})

test('Should Check rendering of  Add Expense in AddExpensePage',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should Check handle method of  Add Expense in AddExpensePage',()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})
