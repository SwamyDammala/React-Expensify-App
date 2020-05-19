import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
//import uuid from uuid

//test for default State
test('Check for default state of Expense reducer',()=>{
    const result=expenseReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual([])
})

//Check for add Expense
test('Check for add expense in expense reducer',()=>{
    const expense={
        description:'Hi',
        notes:'notes',
        createAt:0,
        amount:0,
        id:4
    }
    const action={
        type:'Add_expense',
        expense
    }

    const state=expenseReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

//Check for Edit expense

test('test for Edit expense on expense reducer',()=>{
    const amount=106
    const action={
        type:'Edit_expense',
        id:expenses[0].id,
        updates:{
            amount
        }
    }

    const result=expenseReducer(expenses,action)
    expect(result[0].amount).toBe(amount)
})


//Check for wrong Edit expense

test('test for Edit expense on expense reducer',()=>{
    const amount=106
    const action={
        type:'Edit_expense',
        id:'890',
        updates:{
            amount
        }
    }

    const result=expenseReducer(expenses,action)
    expect(result[0].amount).toBe(expenses[0].amount)
})

//Check for Remove expense
test('Check remove expense on expense reducer filter',()=>{
    const action={type:'Remove_expense',id:expenses[1].id}
    const result=expenseReducer(expenses,action)

    expect(result).toEqual([expenses[0],expenses[2]])

})

//test for rendom id
test('Check remove expense on expense reducer filter',()=>{
    const action={type:'Remove_expense',id:'random id'}
    const result=expenseReducer(expenses,action)

    expect(result).toEqual(expenses)

})
