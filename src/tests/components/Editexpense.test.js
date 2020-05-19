import React from 'react'
import {shallow} from 'enzyme'
import {EditexpensePage} from '../../Components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editexpense,history,removeexpense,expense,wrapper

beforeEach(()=>{
    editexpense=jest.fn()
    history={'push':jest.fn()}
    removeexpense=jest.fn()
    wrapper=shallow(<EditexpensePage editexpense={editexpense} history={history} removeexpense={removeexpense}
                                expense={expenses[2]}/>)
})


test('Should check rendering of EditExpensePgae',()=>{   
    expect(wrapper).toMatchSnapshot()
})

test('Should check for edit expense method in EditExpensePage',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editexpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})

test('Should check for remove expense in edit expense page',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeexpense).toHaveBeenLastCalledWith({id:expenses[2].id})
})