import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import connectionConfig from './store/connectionConfig'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter ,{history} from './routers/AppRouter'
import { setStartExpenses } from './actions/expenses'
import { login ,logout } from './actions/auth'
import getVisibility from './selectors/expenses'
import {firebase} from './firebase/firebase'


const store=connectionConfig()
console.log('test')

const jsx=(
    <Provider store={store} >
        <AppRouter />
    </Provider>

)

let hasRedered=false

const renderApp=()=>{
    if(!hasRedered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRedered=true
    }
}

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
            console.log('Log in')
            store.dispatch(login(user.uid))
            store.dispatch(setStartExpenses()).then(()=>{
                renderApp()   
                if(history.location.pathname==='/'){
                    history.push('/dashboard')
                }
            })
        }
    else{
        store.dispatch(logout())
            renderApp()
           history.push('/')
    }
})




