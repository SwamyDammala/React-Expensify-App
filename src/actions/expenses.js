import uuid from 'uuid'
import database from '../firebase/firebase'

export const addexpense=(expense)=>({
       type:'Add_expense',
       expense
})

export const startAddExpense=(expenseData={})=>{
    return(dispatch)=>{
            //another way of defining default empty object entities
           const {
                description='',
                notes='',
                createdAt=0,
                amount=0
             }=expenseData
             const expense={description,amount,createdAt,notes}
                return   database.ref('expenses').push(expense).then((ref)=>{
                dispatch(addexpense({
                    id:ref.key,
                    ...expense
                }))
           })
    }
}

//Below is the remove the particular expense from expenses array based on the id. We are sending id to match and delete the item from expenses list
export const removeexpense=({id}={})=>({
    type:'Remove_expense',
    id
})

//Below is dunction to edit the exisiting expnase details in expenses array based on the expense id. We are sending update values as object and receive them as objects 
export const editexpense=(id,updates)=>({
    type:'Edit_expense',
    id,
    updates
})


//setExpenses
export const setExpenses=(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})

export const setStartExpenses=()=>{
    return (dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const newExpenses=[]
            snapshot.forEach((childSnapshot)=>{
                newExpenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(newExpenses))
        })
    }
}