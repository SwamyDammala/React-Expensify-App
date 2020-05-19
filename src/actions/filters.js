
//Fliter Setup
//Below ate the filters we are applying on expense array based on text input

export const setTextFilter=(text='')=>({
    type:'Set_Text_Filter',
    text
})

//Below two are the sort by functions applied on expenses array from filters object based on amount and date
export const setSortByDate=()=>({
    type:'Set_Sort_By_Date',
    sortBy:'date'
})

export const setSortByAmount=()=>({
    type:'Set_Sort_By_Amount',
    sortBy:'amount'
})

//Below two are functions defined to set startData and end Date on filters object
export const setStartDate=(startDate='')=>({
    type:'Set_Start_Date',
    startDate
})

export const setEndDate=(endDate='')=>({
type:'Set_End_Date',
endDate
})