import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import connectionConfig from './store/connectionConfig'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './routers/AppRouter'
import { addexpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibility from './selectors/expenses'



const store=connectionConfig()


 store.dispatch(addexpense({description:'Water bill',amount:1000}))
// store.dispatch(addexpense({description:'Coffee bill',createdAt:1000}))
// store.dispatch(addexpense({description:'rent',amount:10000}))
// store.dispatch(addexpense({description:'Coffee bill',createdAt:100}))



const state=store.getState()
const visibility=getVisibility(state.expenses,state.filters)
console.log(visibility)

const jsx=(
    <Provider store={store} >
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx,document.getElementById('app'));




