import { useEffect } from 'react'
import HowToPlay from '../components/HowToPlay'


const rules = [
  {
    "title": "Objective",
    "description": ["The objective of Vijayta Timer mode is to score the highest number of points within a 4-minute time limit."]
  },

  {
    "title": "Starting the Game",
    "description": ["Each player rolls the dice. The player with the highest roll goes first. Play proceeds clockwise from this player."]
  },

  {
    "title": "Movement of Tokens",
    "description": ["Players move their tokens based on the number they roll on the dice. Each player has three tokens that they move around the board in a clockwise direction. Tokens move around the board following the numbers rolled on the dice."]
  },

  {
    "title": "Entering the Board",
    "description": ["To enter the board, a player must roll a 6. Once a player rolls a 6, they can move one of their tokens onto the starting square."]
  },

  {
    "title": "Scoring Points",
    "description": [
      "Players score points based on the number of tokens they manage to get into their home zone within the 4-minute time limit.",
      "Additionally, if a player gets at least one token into their home zone, they receive an extra 56 points.",
      "However, if an opponent captures one of their tokens, the player loses points equivalent to the value of the captured token."
    ]
  },

  {
    "title": "Winning the Game",
    "description": ["At the end of the 4-minute time limit, the player with the highest score wins the game. If two or more players have the same score, the game can be declared a tie or extended for a sudden death round."]
  },

  {
    "title": "Special Rule",
    "description": [
      "If a player manages to get at least one token into their home zone during the 4-minute period, they receive an extra 56 points.",
      "If an opponent captures one of their tokens during the game, the player loses points equivalent to the value of the captured token."
    ]
  }
]

const Quick = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <HowToPlay gameTitle="Quick Move" gameDescription="Four minutes of Turbo-Charged ludo action" gameLogo="/static/videos/quick.gif" bgLogo="/static/images/how_to_play_fixed.png" rules={rules} />
  )
}

export default Quick