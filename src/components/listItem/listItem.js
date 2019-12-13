import React from 'react'
import Button from '../button/button'
import './listItem.scss'
import poubelle from '../../assets/img/poubelle.png'
import valider from '../../assets/img/valider.png'

const listItem = (props) => (
  <div className="listItem">
    <p className={`task ${props.state ? 'done' : ''}`}>{props.task}</p>
    <Button type="delete" clicked={props.delete}><img className="img" alt="Supprimer la tache" src={poubelle}/></Button>
    <Button type="state" clicked={props.done}><img className="img" alt="valider la tache" src={valider}/></Button>
  </div>
)

export default listItem
