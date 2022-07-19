import React from 'react'
import Card from '../CardsPage/Card'

export default function Genres() {
  return (
    <div>
      <Card title="Action Games" genres={'action'}/>
      <Card  title="Sports Games" genres={'sports'}/>
      <Card  title="Puzzle Games" genres={'puzzle'}/>
      <Card  title="Arcade Games" genres={'arcade'}/>
      <Card  title="Strategy Games" genres={'strategy'}/>
    </div>
  )
}
