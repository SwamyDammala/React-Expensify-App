import React from 'react'
import moment from 'moment'
import { SingleDatePicker} from 'react-dates'


const now=moment();
// console.log(now.format('MMM Do, YYYY'));


class ExpenseForm extends React.Component{
    constructor(props){
        super(props)    
            this.state={
                    description:props.expense?props.expense.description:'',
                    notes:props.expense?props.expense.notes:'',
                    amount:props.expense?(props.expense.amount/100).toString():'',
                    createdAt:props.expense?moment(props.expense.createdAt):moment(),
                    calendarFocused:false,
                    error:''
                }
        }
     
    handleDescription=(e)=>{
        const description=e.target.value
        this.setState(()=>({description}))
    }

    handleChange=(e)=>{
        const amount=e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }        
    }

    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    }

    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }

    handleNotes=(e)=>{
        const notes=e.target.value
        this.setState(()=>({notes}))
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide the description and amount'}))
        }
        else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                notes:this.state.notes
            })
        }
    }

    render(){
        return(
            <div>
                
                <form className='form' onSubmit={this.handleSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input type='text' placeholder='Description'
                     className='text-input'
                     autoFocus value={this.state.description} 
                     onChange={this.handleDescription}/>
                    <input type='number' placeholder='Amount' 
                     className='text-input'
                    value={this.state.amount} onChange={this.handleChange}/>
                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}//show the previous month dates...
                    isOutsideRange={(()=>false)} //it will
                    />
                     <textarea placeholder='Add a note for your expense'
                      className='textarea' 
                     value={this.state.notes} onChange={this.handleNotes}></textarea>
                     <div>
                     <button className='button'>Save Expense</button>
                     </div>
                </form>
            </div>
        )
    }
}

export default ExpenseForm




