import React from 'react'
import Button from '../button/button'
import './input.scss'
import plus from '../../assets/img/plus.png'

const input = (props) => (
  <div className="wrapInput">
    <input className="input" type="text" placeholder={props.title} name={props.title} onChange={props.change}/>
    <Button type="add" clicked={props.btnClicked}><img className="img" alt="Ajouter" src={plus}/> </Button>
  </div>
)

export default input
