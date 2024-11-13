import { useEffect } from 'react'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import FAQItem from '../components/FAQItem'

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className='w-full mx-auto max-w-screen-2xl'>
          <Heading title="FAQs" />
          <div className="p-3  py-10 lg:px-12 text-white">
            {FaqData.map((faq) => (
              <FAQItem key={faq.id} {...faq} page="faq" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Faq

const FaqData = [
  {
    id: 1,
    question: "Which is the best ludo earning app ?",
    answer: "If you're looking for the best app to earn money in india while playing Ludo, you should check out Ludo Vijayta. It's considered one of the top choices for players who want to make some cash while having fun with Ludo. With its easy-to-use interface and smooth gameplay."
  },
  {
    id: 2,
    question: "How to play ludo with real money india ?",
    answer: "You have To Download Ludo Vijayta App Then Register in This app You can Earn Money In India . Play And Earn Money in India With Instant withdrawal Facility."
  },
  {
    id: 3,
    question: "Top 10 Best Ludo Earning Apps ?",
    answer: "• Ludo Vijayta (Highly Recommended) • Ludo Vijayta • Ludo Supreme • Ludo Empire • Ludo Club • Ludo Star • Ludo All-Star • Ludo Game • Ludo Master • Ludo Classic"
  },
  {
    id: 4,
    question: "Which is No 1 best ludo earning app ?",
    answer: "Ludo Vijayta is the best Ludo earning app out there. It's number one! With Ludo Vijayta, you can play Ludo and make real money. You can play Ludo and earn money at the same time. It's safe and secure, so you don't have to worry. If you want to earn money while playing your favorite game, Ludo Vijayta is the app for you. Join Ludo Vijayta now and start winning real cash!"
  },
  // {
  //   id: 5,
  //   question: "How to play this game?",
  //   answer: "Ludo Vijayta - an Indian online real cash game is a popular strategy-based board game. To know how to play Ludo read out here:- Best Ludo Earning App https://www.youtube.com/watch?v=fVGpQ8KAkH0&t=4s"
  // },
  {
    id: 6,
    question: "What Are the Rules of Ludo?",
    answer: "The main rules of Ludo are simple: There are 4 players, each with their own color token - red, green, blue, or yellow. They roll the dice and move their tokens around the board. The winner is the player who gets all four of their tokens to the middle of the board, called \"Home\"."
  },
  {
    id: 7,
    question: "Why Should You Play Ludo Games on Ludo Vijayta?",
    answer: "You should play Ludo games on Ludo Vijayta because it's super easy, safe, fun, and you can earn real money, bonuses, prizes while playing your favorite ludo game."
  },
  {
    id: 8,
    question: "Benefits Of Playing Ludo Games on Ludu Vijayta?",
    answer: "Playing Ludo games on Ludo Vijayta offers benefits such as earning real money, having a safe and enjoyable experience, and a user-friendly platform for gaming and entertainment. You get instant withdrawal of your earnings without any problem, Robust security measures for a secure gaming atmosphere, it is RNG certified, has dedicated 24*7 Customer Support Team for any query or concern."
  },
  {
    id: 9,
    question: "Can I Earn real Money by Playing Ludo?",
    answer: "Yes, you can earn real money by playing ludo online on Ludo Vijayta."
  },
  {
    id: 10,
    question: "Can I Earn Money by Referring a Friend to Ludo?",
    answer: "By using our referral program, you can earn cash and bonuses while playing Ludo online."
  },
]