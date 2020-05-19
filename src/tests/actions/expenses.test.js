import {addexpense, editexpense , removeexpense} from '../../actions/expenses'
import uuid from 'uuid'


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
    const action=addexpense({
        description:'New Expression',
        amount:100,
        notes:'Hi this is new expense',
        createdAt:5,
    })

    expect(action).toEqual({
        type:'Add_expense',
        expense:{
        description:'New Expression',
        amount:100,
        notes:'Hi this is new expense',
        createdAt:5,
        id:expect.any(String)//Since  the id value is dynamic we are going to change to any value using jest assertion
        }
    })
})

//Test Add expense with empty objects

test('Checking Add Expense Default object values',()=>{
    const action=addexpense()
    expect(action).toEqual({
        type:'Add_expense',
        expense:{
            description:'',
            amount:0,
            notes:'',
            createdAt:0,
            id:expect.any(String)
        }
    })
})




