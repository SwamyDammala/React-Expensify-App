import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilter} from '../../Components/ExpenseListFilter'
import {filter,altfilter} from '../fixtures/filters'
import moment from 'moment'


let setTextFilter,setSortByDate,setSortByAmount,setStartDate,setEndDate,wrapper

beforeEach(()=>{
    setTextFilter=jest.fn()
    setSortByDate=jest.fn()
    setSortByAmount=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    wrapper=shallow(<ExpenseListFilter 
                        setTextFilter={setTextFilter}
                        setSortByAmount={setSortByAmount}
                        setSortByDate={setSortByDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        filters={filter}/>)
})

test('Should check rendering of ExpenseListFilter Component',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should check altfilters onExpenseListFilter Component',()=>{
    wrapper.setProps({
        filters:altfilter
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should check text filter of ExpenseListFilter Component',()=>{
    const value='rent'
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should check sort by date on ExpenseListFilter Component',()=>{
    const value='date'
    wrapper.setProps({
        filters:altfilter
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(setSortByDate).toHaveBeenCalled()
})

test('Should check sort by amount ExpenseListFilter Component',()=>{
    const value='amount'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(setSortByAmount).toHaveBeenCalled()
})

test('Should check Start Date and End Date ExpenseListFilter Component',()=>{
    const startDate=moment().add(4 ,'years')
    const endDate=moment().add(8 ,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should check calendar focussed on ExpenseListFilter Component',()=>{
   const calendarFocused='endDate'
   wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
   expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})



