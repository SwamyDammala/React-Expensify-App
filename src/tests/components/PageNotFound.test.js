import React from 'react'
import {shallow} from 'enzyme'
import PageNotFound  from '../../Components/PageNotFound'


test('Should test Page not found',()=>{
    const wrapper=shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot()
})