import React from 'react'
import {shallow} from 'enzyme'
import {EditexpensePage} from '../../Components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpenses,history,startRemoveExpenses,expense,wrapper

beforeEach(()=>{
    startEditExpenses=jest.fn()
    history={'push':jest.fn()}
    startRemoveExpenses=jest.fn()
    wrapper=shallow(<EditexpensePage startEditExpenses={startEditExpenses} history={history} startRemoveExpenses={startRemoveExpenses}
                                expense={expenses[2]}/>)
})


test('Should check rendering of EditExpensePgae',()=>{   
    expect(wrapper).toMatchSnapshot()
})

test('Should check for startEditExpenses method in EditExpensePage',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})

test('Should check for startRemoveExpenses in edit expense page',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({id:expenses[2].id})
})