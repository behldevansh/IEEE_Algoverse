import React from 'react'

const Board = () => {
  const handleClick = (e) => {
    console.log(e.target)
  }


  return (
    <div className='board'>
      <h1 className='leaderboard'>AlgoVerse Leaderboard</h1>

      <div className='duratiom'>
      <button onClick={handleClick} data-id="7" >7 Days</button>
      <button data-id="30">30 Days</button>
      <button data-id="0">All Time</button>

      </div>

    </div>
  )
}

export default Board
