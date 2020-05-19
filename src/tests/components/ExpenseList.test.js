import React from 'react'
import {shallow} from 'enzyme'
import { ExpenseList } from '../../Components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should test expensesList object',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should test ExpenseList for empty array',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})