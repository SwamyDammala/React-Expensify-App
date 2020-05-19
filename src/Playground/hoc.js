import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This info belongs to : {props.info}</p>
    </div>
)


const withAdminWarning=(WrappingComonent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>Please do not share this private info</p>}        
            <WrappingComonent {...props} />
        </div>
    )
}

const authStatus=(WrappingComonent)=>{
    return(props)=>(
        <div>
            {props.isAuthenticated ? (<WrappingComonent {...props}/>):
            (<p>Please provide corrct login info to view the page</p>)}            
        </div>
    )
}


const AdminInfo=withAdminWarning(Info)
const AuthentionInfo=authStatus(Info)





// ReactDOM.render(<AdminInfo isAdmin={true} info='This is belongs to HOC'/>,document.getElementById('app'))
 ReactDOM.render(<AuthentionInfo isAuthenticated={true} info='This is belongs to HOC'/>,document.getElementById('app'))
//ReactDOM.render(<HOC/>,document.getElementById('app'))

