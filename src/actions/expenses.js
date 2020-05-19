import uuid from 'uuid'

export const addexpense=({
    description='',
    notes='',
    amount=0,
    createdAt=0
            }={}
    )=>({
       type:'Add_expense',
       expense:{
           id:uuid(),
           description,
           notes,
           amount,
           createdAt
       }

})

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