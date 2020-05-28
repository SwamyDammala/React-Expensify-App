import authReducer from '../../reducers/auth'
import { act } from 'react-test-renderer'

test('Check check login on authReducer',()=>{
    const action={type:'LOGIN',uid:'random id'}
    const result=authReducer({},action)

    expect(result.uid).toBe(action.uid)

})

test('Check check logout on authReducer',()=>{
    const action={type:'LOGOUT'}
    const result=authReducer({uid:'anything'},action)

    expect(result).toEqual({})

})