import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {AddexpensePage} from '../../Components/AddExpensePage'


let addexpense,history,wrapper

beforeEach(()=>{
    addexpense=jest.fn()
    history={'push':jest.fn()}
    wrapper=shallow(<AddexpensePage addexpense={addexpense} history={history} />)
})

test('Should Check rendering of  Add Expense in AddExpensePage',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should Check handle method of  Add Expense in AddExpensePage',()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addexpense).toHaveBeenLastCalledWith(expenses[1]);
})
