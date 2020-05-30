import React from 'react'
import {shallow} from 'enzyme'
import {LoadingPage} from '../../Components/LoadingPage'

test('should check for Loadingpage',()=>{
    const wrapper=shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})