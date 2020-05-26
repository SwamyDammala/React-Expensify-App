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
                case 'SET_EXPENSES':
                    return  action.expenses
                    
                default:
                    return state            
            }
}

export default expenseReducer