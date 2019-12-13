import React from 'react'
import './listCard.scss'

const listCard = (props) => (
  <section className="list-card">
    {props.children}
  </section>
)

export default listCard
