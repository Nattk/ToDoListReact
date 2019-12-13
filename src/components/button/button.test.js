import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

let button
beforeEach(() => {
  button = shallow(<Button type="danger" clicked={() => {}}>My Button</Button>)
})

it('Should render childrens', () => {
  expect(button.text()).toEqual('My Button')
})

it('Should take props', () => {
  expect(button.prop('className')).toEqual('danger')
})
