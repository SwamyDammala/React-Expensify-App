import  filterReducer  from '../../reducers/filters'
import moment from 'moment'

//@@INIT is default

test('Check default filterReducer Object',()=>{
    const result=filterReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})


//Test for sort By amount
test('check SortBy Amount filterReducer Object',()=>{
    const state=filterReducer(undefined,{type:'Set_Sort_By_Amount'})
    expect(state.sortBy).toBe('amount')
})

//Test for Sort By Date
test('Check Date Sort By filterReducer Object',()=>{
    const Currentstate={
            text:'',
            sortBy:'amount',
            startDate:undefined,
            endDate:undefined
                }
    const action={type:'Set_Sort_By_Date'}

    const result=filterReducer(Currentstate,{type:'Set_Sort_By_Date'})
        expect(result).toEqual({
            text:'',
            sortBy:'date',
            startDate:undefined,
            endDate:undefined
        })
})

//Test for Start Date
test('Check start date for the object',()=>{
    const startDate=moment()
    const action={type:'Set_Start_Date',startDate}
    const result=filterReducer(undefined,action)
    expect(result.startDate).toEqual(startDate)
})



//Test for End Date
test('Check end Date for filter reducer object',()=>{
    const endDate=moment()
    const action={type:'Set_End_Date',endDate}

    const result=filterReducer(undefined,action)
    expect(result.endDate).toEqual(endDate)
})

//Text filter
test('Check Text filter for filter reducer object',()=>{
    const text='Hi this is text filter'
    const state={type:'Set_Text_Filter',text}

    expect(state.text).toBe(text)
})
