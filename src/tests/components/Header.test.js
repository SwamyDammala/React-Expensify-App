import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../Components/Header'


test('Chechk header component using Shallow snapshot method',()=>{
    const wrapper=shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})