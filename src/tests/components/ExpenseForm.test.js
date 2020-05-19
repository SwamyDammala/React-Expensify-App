import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../Components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'


test('Check ExpenseForm with empty data and Mocking moment library with jest',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Check ExpenseForm with data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error method on form Submission',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
})

test('should check for desciption in the Expense form',()=>{
    const value='New Description'
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{
        'target':{value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should check for notes in Expense form',()=>{
    const value='this is for notes'
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change',{
        'target':{value}
    })
    expect(wrapper.state('notes')).toBe(value)
})

test('should check for valid amount in Expense form',()=>{
    const value='60.01'
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        'target':{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should check for Invalid amount in Expense form',()=>{
    const value='12.234.23'
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        'target':{value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should check for Onsubmit props method call for add expense in expenseform',()=>{
    const OnSubmitspy=jest.fn()
    OnSubmitspy()
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={OnSubmitspy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(OnSubmitspy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        notes:expenses[0].notes,
        createdAt:expenses[0].createdAt
        })
})

test('Should check date chage in the Datepicker in ExpenseForm',()=>{
    const now=moment()
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now)
})

test('Should Check calenderFocused in the ExpenseForm',()=>{
    const focused=true
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})


