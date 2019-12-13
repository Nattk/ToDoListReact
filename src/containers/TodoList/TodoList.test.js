import React from 'react'
import { shallow } from 'enzyme'
import TodoList from './TodoList'

let todoList
beforeEach(() => {
  todoList = shallow(<TodoList/>)
})

it('Should render', () => {
  expect(todoList).toBeDefined()
  expect(todoList.exists()).toBe(true)
})
