import { createStore , combineReducers} from 'redux'
import uuid from 'uuid'

//7th step: creating action to add and item to todo list
const addItems=({category='',notes='',description='',status=''}={})=>({
    type:'Add_Items',
    todolistitem:{
        id:uuid(),
        category,
        notes,
        description,
        status
    }   
})


const filterShowAll=(filter='')=>({
    type:'Show_All',
    filter
})

const filterShowCompleted=(filter)=>({
    type:'Show_Completed',
    filter
})

const filterShowAactive=(filter)=>({
    type:'Show_active',
    filter
})



//4th store:creatring empty reference array for todoList
const todoListDefaultState=[]

//1st stpe: below is the one of the reducer to show the todolist items
const todolistReducer=(state=todoListDefaultState,action)=>{
    switch(action.type){
        case 'Add_Items':
            return state.concat(action.todolistitem)
    }
    return state
}

//5th step:createing reference object for filters
const filterDefaultState={show_All:'Show_All',show_Completed:'Show_Completed',show_Active:'Show_Active'}

//2nd step:below is second the reducer to show apply the filter
const filterReducer=(state=filterDefaultState,action)=>{
    switch(action.type){
        case 'Show_All':
            return {...state,
                    show_All:action.filter}
        case 'Show_Completed':
            return {...state,
                show_Completed:action.filter}
        case 'Show_Active':
                return {...state,
                    show_Active:action.filter}
        default:
              return state
    }
}

const getVisible=(todoList,filters)=>{
        return todoList.filter((item)=>{
            if(item.status==='Completed'){
                return item
            }
            // else if (filters.show_Active===item.status){
            //     return item
            // }
            // else if (filters.show_All==='All' && item.status==='Yet to Complete' || item.status==='Completed'){
            // return item
            // }
        })
}

//3rd step: create a reducer store where it will combine both of the above reducers
const store=createStore(
    combineReducers({
        todoList:todolistReducer,
        filters:filterReducer
    })
)

//8th step to pritnt the store values each time we call the function
store.subscribe(()=>{
    const state=store.getState()
    const visible=getVisible(state.todoList,state.filters)
    console.log(visible)
})
//6th step: printing the current state into console.
//console.log(store.getState())

store.dispatch(addItems({category:'Food',notes:'Breakfast',description:'Breakfast is mandatory',status:'Yet to Complete'}))
store.dispatch(addItems({category:'Physical Health',notes:'Workouts',description:'Early Morning Done',status:'Completed'}))
store.dispatch(addItems({category:'Work',notes:'Office work',description:'Need to attand calls',status:'Yet to Complete'}))
store.dispatch(addItems({category:'Knowledge',notes:'Reading book',description:'10 pages read',status:'Completed'}))


//store.dispatch(filterShowCompleted('Completed'));
// store.dispatch(filterShowAll('All'));
// store.dispatch(filterShowAactive('Yet to Complete'));


//6th step


