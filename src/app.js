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
import './firebase/firebase'



const store=connectionConfig()
console.log('test')

const jsx=(
    <Provider store={store} >
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx,document.getElementById('app'));




