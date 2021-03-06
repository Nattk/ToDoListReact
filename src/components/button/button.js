import React from 'react'
import './button.scss'

const button = (props) => (

  <button className={props.type} onClick={props.clicked}>{props.children}</button>
)

export default button
