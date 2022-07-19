import React from 'react'
import Card3 from '../CardsPage/Card3'
export default function PlatformForGame() {
  return (
    <div>
      <Card3 heading='Playstation' link={`https://rawg.io/api/collections/playstation-5/games?page_size=10`} />
      <Card3 heading='Xbox' link={`https://rawg.io/api/collections/xbox-1/games`} />
      <Card3 heading='Epic' link={`https://rawg.io/api/collections/epic/games`} />
      <Card3 heading='Nintendo' link={`https://rawg.io/api/collections/nintendo/games`} />
      <Card3 heading='Steam' link={`https://rawg.io/api/collections/steam/games?page_size=10`} />

    </div>
  )
}
