import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../Components/Header'


test('Chechk header component using Shallow snapshot method',()=>{
    const wrapper=shallow(<Header startLogout={{}={}}/>)
    expect(wrapper).toMatchSnapshot()
    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('check header component using actual logout button',()=>{
    const startLogout=jest.fn()
    const wrapper=shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})