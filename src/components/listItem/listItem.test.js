import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './listItem'

let item
beforeEach(() => {
  item = shallow(
    <ListItem
      task="Faire le ménage"
      state="false"
    />
  )
})
it('Should render', () => {
  expect(item.prop('className')).toEqual('listItem')
})

it('Should take props', () => {
  expect(item.find('p').text()).toEqual('Faire le ménage')
})

it('Should add class done when state is set to true', () => {
  item.setProps({ state: 'true' })
  expect(item.find('.done').exists()).toBe(true)
})
