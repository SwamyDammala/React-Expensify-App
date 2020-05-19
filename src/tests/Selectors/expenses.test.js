import SelectorExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'



test('Checking text filter reducer in Expenses',()=>{
    const filters={
        text:'u',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const results=SelectorExpenses(expenses,filters)
    expect(results).toEqual([expenses[0]])

})

test('Checking expenses by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
        }
        const results=SelectorExpenses(expenses,filters)
        expect(results).toEqual([expenses[2],expenses[0]])
})

test('Checking End Date filter on expense',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2, 'days')
        }

        const results=SelectorExpenses(expenses,filters)
        expect(results).toEqual([expenses[0],expenses[1]])
})

test('Checking sort By Date on expenses',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
        }
        const results=SelectorExpenses(expenses,filters)
        expect(results).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('Checking sort By Amount on expenses',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
        }
        const results=SelectorExpenses(expenses,filters)
        expect(results).toEqual([expenses[2],expenses[1],expenses[0]])
})