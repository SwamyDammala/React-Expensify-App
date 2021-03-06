import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter , setSortByDate , setSortByAmount , setStartDate , setEndDate} from '../actions/filters'
import { DateRangePicker } from 'react-dates'


export class ExpenseListFilter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            calendarFocused:null
        }
    }

    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value)
        e.target.value=''
                }
    onSortByChange=(e)=>{
        if(e.target.value==='date'){
            this.props.setSortByDate()
        }
        else if(e.target.value==='amount'){
            this.props.setSortByAmount()
        }
    }

    render(){
        return(
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__items'>
                        <input type='text' className='text-input'
                        placeholder='Search Expenses'
                        value={this.props.filters.text} onChange={this.onTextChange}/>
                    </div>
                    <div className='input-group__items'>
                        <select value={this.props.filters.sortBy} className='select-choice'
                            onChange={this.onSortByChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className='input-group__items'>
                        <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused} 
                        onFocusChange={this.onFocusChange} 
                        showClearDates={true} //It will show the clear button at end
                        numberOfMonths={1}
                        isOutsideRange={()=>{false}}
                        //initialVisibleMonth={() => moment().add(2, "M")}
                        />
                    </div>
                </div>
                
            </div>
        )          
    }
}


const MapStateToProps=((state)=>{
    return{
        filters:state.filters
        }
})

const mapsDispatchToProps=(dispatch)=>{
    return{
        setTextFilter:(text)=>dispatch(setTextFilter(text)),
        setSortByAmount:()=>dispatch(setSortByAmount()),
        setSortByDate:()=>dispatch(setSortByDate()),
        setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
        setEndDate:(endDate)=>dispatch(setEndDate(endDate))
    }
}


export default connect(MapStateToProps,mapsDispatchToProps)(ExpenseListFilter)