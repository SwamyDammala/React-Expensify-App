import {setTextFilter , setSortByAmount ,setSortByDate ,setStartDate,setEndDate} from '../../actions/filters'
import moment from 'moment'

//Testing Date filters for Start Date
test('Checking StartDate Filter for Date filter Object',()=>{
    const action=setStartDate(moment(0))

    expect(action).toEqual({
        type:'Set_Start_Date',
        startDate:moment(0)
    })
})


//Testing End Date filter for End Date Object
test('Checking End Date Filter for Date filter Object',()=>{
    const action=setEndDate(moment(0))

    expect(action).toEqual({
        type:'Set_End_Date',
        endDate:moment(0)
    })
})

//Checking SortBy Amount filter

test('Checking Sort By Amount filter Object',()=>{
    const action=setSortByAmount()

    expect(action).toEqual({
        type:'Set_Sort_By_Amount',
        sortBy:'amount'
    })
})

//CHecking Sort By Date Filter

test('Checking Set Sort BY Date Filter',()=>{
    const action =setSortByDate()

    expect(action).toEqual({
        type:'Set_Sort_By_Date',
        sortBy:'date'
    })
})

//Checking text filter by passing Text value
test('Checking the test filter',()=>{
    const action=setTextFilter('rent')

    expect(action).toEqual({
        type:'Set_Text_Filter',
        text:'rent'        
    })
})

//With out passing text value
test('Checking for text filter',()=>{
    const action=setTextFilter()

    expect(action).toEqual({
        type:'Set_Text_Filter',
        text:''
    })
})
