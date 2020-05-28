import React from 'react'
import {shallow} from 'enzyme'
import {Login} from '../../Components/Login'

test('Should test Login Page',()=>{
    const wrapper=shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
})

test('check header component using actual LogIn button',()=>{
    const startLogin=jest.fn()
    const wrapper=shallow(<Login startLogin={startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})