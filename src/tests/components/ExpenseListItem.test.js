import React from 'react'
import ExpenseListItem from '../../Components/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

const expense=expenses[0]

test('should test ExpensList Item for one of the object from expenses array',()=>{
    const wrapper=shallow(<ExpenseListItem {...expense} />)
    expect(wrapper).toMatchSnapshot()
})