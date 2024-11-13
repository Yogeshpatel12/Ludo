import { useEffect } from 'react'
import HowToPlay from '../components/HowToPlay'

const rules = [
  {
    "title": "Objective",
    "description": ["The objective of Vijayta Timer mode is to score the highest number of points within an 8-minute time limit."]
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
      "Players score points based on the number of tokens they manage to get into their home zone within the 8-minute time limit.",
      "Additionally, if a player gets at least one token into their home zone, they receive an extra 56 points.",
      "However, if an opponent captures one of their tokens, the player loses points equivalent to the value of the captured token."
    ]
  },

  {
    "title": "Home Zone",
    "description": ["Once a player's token completes a full circuit of the board, it enters the home zone. The home zone consists of eight squares of the same color as the player's tokens."]
  },

  {
    "title": "Winning the Game",
    "description": ["At the end of the 8-minute time limit, the player with the highest score wins the game. If two or more players have the same score, the player who reached the highest score first wins."]
  },

  {
    "title": "Special Rule",
    "description": ["Players must strategize to maximize their points within the time limit while also protecting their tokens from being captured by opponents. Getting tokens into the home zone not only scores points but also provides a significant bonus, encouraging players to prioritize reaching the home zone."]
  }
]

const Timer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <HowToPlay gameTitle="Timer" gameDescription="Eight minutes of fast-placed ludo" gameLogo="/static/videos/timer.gif" bgLogo="/static/images/how_to_play_timer.png" rules={rules} />
  )
}

export default Timer