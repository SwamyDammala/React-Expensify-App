import {login, logout} from '../../actions/auth'

test('should test for login for auth component',()=>{
    const action=login(5)
    expect(action).toEqual({
        type:'LOGIN',
        uid:5
    })
})


test('should test for logout for auth component',()=>{
    const action=logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})