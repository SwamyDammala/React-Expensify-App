import { createStore , combineReducers} from 'redux'
import  uuid from 'uuid'


//expense setup
//Below is creating a function for add expans into expenses array and we are creating few values and sending them into empty array
const addexpense=({
    description='',
    notes='',
    amount=0,
    createdAt=''
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
const removeexpense=({id}={})=>({
    type:'Remove_expense',
    id
})

//Below is dunction to edit the exisiting expnase details in expenses array based on the expense id. We are sending update values as object and receive them as objects 
const editexpense=(id,updates)=>({
    type:'Edit_expense',
    id,
    updates
})


//Fliter Setup
//Below ate the filters we are applying on expense array based on text input

const setTextFilter=(text='')=>({
    type:'Set_Text_Filter',
    text

})

//Below two are the sort by functions applied on expenses array from filters object based on amount and date
const setSortByDate=()=>({
    type:'Set_Sort_By_Date',
    sortBy:'date'
})

const setSortByAmount=()=>({
    type:'Set_Sort_By_Amount',
    sortBy:'amount'
})


//Below two are functions defined to set startData and end Date on filters object
const setStartDate=(startDate='')=>({
        type:'Set_Start_Date',
        startDate
})

const setEndDate=(endDate='')=>({
    type:'Set_End_Date',
    endDate
})

//Below is function for retreiving data from expense array based on filters

const getVisibleexpenses=(expenses,{text,sortBy,startDate,endDate})=>{
     return expenses.filter((expense)=>{        
        const startDateMatch=typeof startDate!=='number' || expense.createdAt>=startDate
        const endDateMatch=typeof endDate!=='number'|| expense.createdAt<=endDate
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
                 }).sort((a,b)=>{
                  if(sortBy==='date'){
                        return a.createdAt<b.createdAt?1:-1
                            } 
                        else if(sortBy==='amount'){
                             return a.amount<b.amount?1:-1
                            }            
         })
}


//Empty array 
const expenseReducerDefaultState=[]

//Below is the function we will pass into create store for expense array to update based on diferent types of conditions
const expenseReducer=(state=expenseReducerDefaultState,action)=>{
    switch(action.type){
                case 'Add_expense':            
                    return  [
                            ...state,
                            action.expense
                            ]
                case 'Edit_expense':
                        return state.map((expense)=>{
                            if(expense.id===action.id){
                                return{
                                    ...expense,
                                    ...action.updates
                                     } 
                                }
                            else{
                                return expense
                                }
                            })
                case 'Remove_expense':
                        return state.filter(({id})=>(action.id!==id))
                default:
                    return state            
            }
}


//Below is the instial state of filter objects contails values
const filterReducerDefaultState={text:'',sortBy:'date',startDate:undefined,endDate:undefined}

//Below is the function to work on filters object in create store based on different type of conditions
const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
                case 'Set_Text_Filter':
                    return {
                         ...state,
                             text:action.text
                            }
                case 'Set_Sort_By_Date':
                    return{
                         ...state,
                          sortBy:action.sortBy
                          }
                case 'Set_Sort_By_Amount':
                    return{
                        ...state,
                         sortBy:action.sortBy
                          }
                case 'Set_Start_Date':
                    return{
                        ...state,
                        startDate:action.startDate
                    }
                    case 'Set_End_Date':
                        return{
                            ...state,
                            endDate:action.endDate
                        }
                   default:
                    return state
             }
    }

    //Create store the functions where redux can start working on and combine reducres will combine the multiple reducers
const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
)

//will print or log the each dunction get called
store.subscribe(()=>{
    const state=store.getState()
    const visibleexpenses=getVisibleexpenses(state.expenses,state.filters)
    console.log(visibleexpenses);
})

const expenseOne=store.dispatch(addexpense({description:'rent',notes:'text',amount:500,createdAt:-1000}))
const expenseTwo=store.dispatch(addexpense({description:'entertinement',notes:'coffee',amount:200,createdAt:900}))
// store.dispatch(removeexpense({id:expenseTwo.expense.id}))
//store.dispatch(editexpense(expenseOne.expense.id,{description:'coffee',amount:'500',createdAt:1000}))

//store.dispatch(setTextFilter('nement'))
// store.dispatch(setTextFilter())
store.dispatch(setSortByDate());
store.dispatch(setSortByAmount());
 

//  store.dispatch(setStartDate(1200))
// store.dispatch(setStartDate())
//  store.dispatch(setEndDate(300))
// store.dispatch(setEndDate())



//console.log(expenseTwo);










// const demoState={
//     expenses:[{
//         id:'gyhsbcjhbsjvsb',
//         description:'January Rent',
//         note:'This was the last month receipt',
//         amount:23000,
//         createdAt:0
//     }],
//     filters:{
//         text:'rent',
//         sortBy:'amount',
//         startDate:undefined,
//         endDate:undefined
//     }
// }

