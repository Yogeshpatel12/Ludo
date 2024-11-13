import { useEffect } from 'react'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'

const ResponsibleGaming = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className='w-full mx-auto max-w-screen-2xl'>
          <Heading title="Responsible Gaming" />
          <div className='space-y-6 my-8 text-left text-white'>
            <p>We understand that gaming has the potential to be addictive, and one can lose track of time and money whilst playing games. But keeping the following DOs and DON’Ts in mind, you can ensure your love for gaming doesn’t change into an addiction:</p>
            <div className='space-y-3'>
              <p className='font-bold text-lg'>DO'S</p>
              <ul className='list-disc pl-5 space-y-3'>
                <li>Play for entertainment alone, not as a source of earnings or remuneration which in any manner impacts your financial independence</li>
                <li>Decide in advance how much money you will spend playing the game and only play with disposable income (i.e. such amounts of money you can afford to risk losing entirely without in any way jeopardizing your current financial position)</li>
                <li>Decide on the number of hours you will be devoting to the game and stick to it ensuring you do not exceed such number of hours in any circumstances</li>
                <li>Set deposit limits while playing so that you never deposit more than your disposable income which you can afford to lose</li>
                <li>  Take a break and pause playing for a while if you have lost money continuously multiple times• Reach out to our customer care if you think you are addicted to any of our games and would like us to help you with dealing with your game-addiction</li>
              </ul>
            </div>
            <div>
              <p className='font-bold text-lg'>DON'TS</p>
            </div>
            <ul className='list-disc pl-5 space-y-3'>
              <li> Don’t play to earn extra income</li>
              <li>Don’t play impulsively</li>
              <li>Don’t play with loaned money</li>
              <li>Don’t play if you’re not in a calm mental state</li>
              <li> This affects your game performance ultimately leading you to lose money </li>
              <li>Don’t chase losses. Since all games on Ludo Sikandar are skill-based, take time to hone your skills to play better</li>
              <li> Don’t forget to keep a check on how much you are spending on the game</li>
              <li>Don’t play in between work or other engagements so you can play the game with a free mind. This is also important as you don’t want this to interfere with your day-to-day life
              </li>
              <li>Don’t harass, threaten or abuse other players on the Platform or engage in any conduct that would be considered as illegal, unethical or defamatory
              </li>
              <li>
                If you need any further information or help, write to us at care@ludovijayta.com and we would be happy to help.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ResponsibleGaming