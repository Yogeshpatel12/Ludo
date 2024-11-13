import { useEffect } from 'react'
import HowToPlay from '../components/HowToPlay'

const rules = [
  {
    "title": "Objective",
    "description": ["The objective of the game is to get one of your tokens to your home square."]
  },
  {
    "title": "Starting the Game",
    "description": ["Each player starts with all their tokens outside the board."]
  },
  {
    "title": "Movement",
    "description": ["Players take turns rolling the dice and moving their tokens according to the number rolled. Only one token is moved per turn."]
  },
  {
    "title": "Special Rule",
    "description": ["If a player successfully moves one of their tokens to their home square, they win the game immediately. This token cannot be captured or sent back to the starting area by other players' tokens."]
  },
  {
    "title": "Blocked Path",
    "description": ["If a player's token is blocked by another player's token, they cannot move that token until the blocking token is moved away."]
  },
  {
    "title": "Capturing",
    "description": ["If a player's token lands on a square occupied by an opponent's token, the opponent's token is sent back to its starting area."]
  },
  {
    "title": "Re-Entering",
    "description": ["Captured tokens re-enter the game when the player rolls a 6. The player can then place the re-entering token on any unoccupied square that is not a home square or a blockaded square."]
  },
  {
    "title": "Six Roll",
    "description": ["If a player rolls a 6, they get an extra turn."]
  },
  {
    "title": "Winning",
    "description": ["The first player to get one of their tokens to their home square wins the game immediately, even if it's not their turn."]
  },
  {
    "title": "Optional Rule - Last Chance",
    "description": ["If a player fails to get their token home and all other players have already won, they get one last chance to roll the dice. If they roll a number that allows them to move, they can attempt to get their token home. If they fail, the game ends, and they lose."]
  }
]

const Solo = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <HowToPlay gameTitle="Solo" gameDescription="Claim victory with solo token" gameLogo="/static/videos/solo.gif" bgLogo="/static/images/how_to_play_snake.png" rules={rules} />
  )
}

export default Solo