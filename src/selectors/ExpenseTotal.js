import moment from 'moment'



export default (expenses)=>{   
        return  expenses.map(expense=>expense.amount).reduce((a,b)=>a+b,0)    
    }


// const totals=(total,num)=>{
//     return total+num
// }

//console.log(getTotalExpenses(expenses))