import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense, addexpense, editexpense , removeexpense} from '../../actions/expenses'
import uuid from 'uuid'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore=configureMockStore([thunk])


//Add Expense Test Case

test('Checking remove expenses objects',()=>{
    const action=removeexpense({id:'123abc'})
    expect(action).toEqual({
        type:'Remove_expense',
        id:'123abc'
    })
})

//Edit expense Test Case:

test('Checking Edit Expenses objects',()=>{
    const action=editexpense('123bcd',{amount:100,notes:'Expense has been updated'})

    expect(action).toEqual({
        type:'Edit_expense',
        id:'123bcd',
        updates:{
            notes:'Expense has been updated',
            amount:100}
    })
})

//Add Expense Test Case:

test('Checking Add expense objects',()=>{
    const action=addexpense(expenses[2])

    expect(action).toEqual({
        type:'Add_expense',
        expense:expenses[2]
    })
})

test('Check add expense dispatch and store got generated form redux startAddexpense method',(done)=>{
    const store=createMockStore({})
    const expenseData={
        description:'New Item',
        amount:10,
        notes:'test',
        createdAt:1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'Add_expense',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Check add expense dispatch and store got generated form redux startAddexpense method for default values',
(done)=>{
    const store=createMockStore({})
    const expenseDefaults={
        description:'',
        amount:0,
        notes:'',
        createdAt:0
    }
    store.dispatch(startAddExpense({})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'Add_expense',
            expense:{
                id:expect.any(String),
                ...expenseDefaults
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})

//Test Add expense with empty objects

// test('Checking Add Expense Default object values',()=>{
//     const action=addexpense()
//     expect(action).toEqual({
//         type:'Add_expense',
//         expense:{
//             description:'',
//             amount:0,
//             notes:'',
//             createdAt:0,
//             id:expect.any(String)
//         }
//     })
// })




