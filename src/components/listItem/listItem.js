import React from 'react'
import Button from '../button/button'

const listItem = (props) => (
  <div>
    <p>{props.task}</p>
    <Button clicked={props.delete}>Supprimer</Button>
    <Button clicked={props.done}>Valider</Button>
  </div>
)

export default listItem
