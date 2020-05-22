import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

const expenses=[{expensesCount:1,expensesTotal:135},{expensesCount:23,expensesTotal:23500}]

test('Should check Expense Summary for single expense',()=>{
    const wrapper=shallow(<ExpenseSummary expenses={[expenses[0]]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should check Expense Summary for multiple expenses',()=>{
    const wrapper=shallow(<ExpenseSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})
