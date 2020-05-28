import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense, addexpense, editexpense , removeexpense ,
    setExpenses,setStartExpenses,startRemoveExpenses,startEditExpenses
} from '../../actions/expenses'
import uuid from 'uuid'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'



const uid='thisisuseruid'
const defaultAuthState={auth:{ uid }}
const createMockStore=configureMockStore([thunk])

beforeEach((done)=>{
    const expenseData={}
    expenses.forEach(({id,description,amount,notes,createdAt})=>{
        expenseData[id]={description,amount,notes,createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=>done())
})


//Add Expense Test Case

test('Checking remove expenses objects',()=>{
    const action=removeexpense({id:'123abc'})
    expect(action).toEqual({
        type:'Remove_expense',
        id:'123abc'
    })
})

//Test start Remove expenses

test('SHould check for start remove expenses',(done)=>{
    const store=createMockStore(defaultAuthState)
    const id=expenses[2].id
    store.dispatch(startRemoveExpenses({id})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'Remove_expense',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should check startEdit expanse',(done)=>{
    const store=createMockStore(defaultAuthState)
    const id=expenses[2].id
    const updates={amount:2207}
        store.dispatch(startEditExpenses(id,updates)).then(()=>{
            const actions=store.getActions()
            expect(actions[0]).toEqual({
                type:'Edit_expense',
                updates,
                id
            })
            return database.ref(`users/${uid}/expenses/${id}`).once('value')
        }).then((snapshot)=>{
            expect(snapshot.val().amount).toBe(updates.amount)
            done()
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
    const store=createMockStore(defaultAuthState)
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Check add expense dispatch and store got generated form redux startAddexpense method for default values',
(done)=>{
    const store=createMockStore(defaultAuthState)
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})

//Test Set Expenses
test('test set expenses for database',()=>{
    const action=setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

//Test setStartexpenses

test('Should check set starte expenses method to get data from databse',(done)=>{
    const store=createMockStore({auth:{uid}})
    store.dispatch(setStartExpenses()).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done()
    })
})








