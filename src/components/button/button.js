import React from 'react'

const button = (props) => (

  <button className={props.type} onClick={props.clicked}>{props.children}</button>
)

export default button
