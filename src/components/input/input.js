import React from 'react'
import Button from '../button/button'

const input = (props) => (
  <React.Fragment>
    <input type="text" placeholder={props.title} name={props.title} onChange={props.change}/>
    <Button clicked={props.btnClicked} >Ajouter</Button>
  </React.Fragment>
)

export default input
