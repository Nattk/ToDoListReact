import React from 'react'
import Button from '../button/button'

const listItem = (props) => (
  <div>
    <p>{props.task}</p>
    <Button>Supprimer</Button>
    <Button>Valider</Button>
  </div>
)

export default listItem
