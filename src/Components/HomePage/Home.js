import React from 'react'
// import Card from '../CardsPage/Card'
import Card2 from '../CardsPage/Card2'
import Card4 from '../CardsPage/Card4'
export default function Home() {
    
  return (
    <div className='home_container'>
      <Card4 title='Trending Games' url={`https://rawg.io/api/collections/play-now/games`} />
      <Card2 title='Upcoming Games' url={`https://rawg.io/api/collections/upcoming/games`} />
      <Card2 title='Newly Added Games' url={`https://api.rawg.io/api/games?dates=2022-06-01,2022-07-30&ordering=-added&key=a06b8926e25c4a1686be32ff57d7997a`} />
      <Card2 title='Top Rated Games' url={`https://api.rawg.io/api/games?dates=2022-01-01,2022-07-17&ordering=-rating&key=a06b8926e25c4a1686be32ff57d7997a&page_size=5`} />
      <Card2 title='Popular Games' url={`https://rawg.io/api/collections/top/games`} />
    </div>
  )
}
