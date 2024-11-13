import { useEffect } from 'react'
import HowToPlay from '../components/HowToPlay'

const rules = [
  {
    "title": "Objective",
    "description": ["The objective of Vijayta Classic mode is to be the first player to get all three of their tokens into their home zone."]
  },
  {
    "title": "Starting the Game",
    "description": ["Each player rolls the dice.The player with the highest roll goes first.Play proceeds clockwise from this player."]
  },
  {
    "title": "Movement of Tokens",
    "description": ["Players move their tokens based on the number they roll on the dice.Each player has three tokens that they move around the board in a clockwise direction.Tokens move around the board following the numbers rolled on the dice."]
  },
  {
    "title": "Entering the Board",
    "description": ["To enter the board, a player must roll a 6. Once a player rolls a 6, they can move one of their tokens onto the starting square."]
  },
  {
    "title": "Capturing Opponent's Tokens",
    "description": ["If a player lands on a square occupied by an opponent's token, the opponent's token is sent back to its starting area. However, if a player has two or more tokens on the same square, it forms a blockade, and opponents cannot capture any tokens on that square."]
  },
  {
    "title": "Home Zone",
    "description": ["Once a player's token completes a full circuit of the board, it enters the home zone. The home zone consists of eight squares of the same color as the player's tokens."]
  },
  {
    "title": "Winning the Game",
    "description": ["In Vijayta Classic mode, the winner is the first player to get all three of their tokens into their home zone.However, to win, the player's token must be the first one to reach the home zone, meaning they must be the first player to successfully get all three tokens into their home area."]
  },
  {
    "title": "Special Rule",
    "description": ["In this mode, if a player manages to get all three of their tokens into the home zone before any other player has even entered their tokens onto the board, that player wins the game immediately, regardless of the progress of other players.This emphasizes the importance of a swift and strategic start."]
  }
]

const Classic = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <HowToPlay gameTitle="Classic" gameDescription="Triple Token Triumph for victory" gameLogo="/static/videos/classic.gif" bgLogo="/static/images/how_to_play_classic.png" rules={rules} />
  )
}

export default Classic