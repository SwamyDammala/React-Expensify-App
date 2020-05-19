import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../Components/ExpenseDashboardPage'


test('Should Test Expennse DashboardPage',()=>{
    const wrapper=shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})