import { createStore } from 'redux'


const increaseCount=({increaseBy=1}={})=>({
    type:'INCREASE',
    increaseBy
    })
  
  const decreaseCount=({decreaseBy=1}={})=>({
    type:'DECREASE',
    decreaseBy
  })
  
  const reset=({count=0}={})=>({
    type:'RESET',
    count
  })
  
  const set=({count=101}={})=>({
    type:'SET',
    count
  })

  const countReducer=((state={count:0},action)=>{
    switch(action.type){
          case 'INCREASE':
          return{
            count:state.count+action.increaseBy
          }
          case 'DECREASE':
          return{
            count:state.count-action.decreaseBy
          }
          case 'RESET':
          return{
            count:action.count
          }
          case 'SET':
            return{
              count:action.count
            }
          default:
          return{
            count:state.count
          }
    }
  })
  
  const store=createStore(countReducer)
  
  store.subscribe(()=>{
    console.log(store.getState());
  })
  
  
  
  //Model 2
   store.dispatch(increaseCount({increaseBy:5}));  
   store.dispatch(increaseCount());
   
   
  
  
  
  store.dispatch(decreaseCount());
  store.dispatch(decreaseCount({decreaseBy:5}));
  
  store.dispatch(reset({count:0}))
  store.dispatch(set({count:101}))




