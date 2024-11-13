import FAQItem from "../FAQItem";

const FAQ = () => {
  return (
    <section name="FAQs" className='w-full bg-[url("/static/images/faq_background.png")] pb-10 pt-10 lg:pt-16'>
      <div className='max-w-screen-2xl mx-auto w-full px-4 sm:px-8 text-white space-y-5'>
        <h3 className='font-bold text-4xl text-center'>FAQs:</h3>
        <div className="rounded-3xl p-4 sm:p-8 bg-[#2a0d4dbd] py-10 lg:px-12">
          {FaqData.map((faq) => (
            <FAQItem key={faq.id} {...faq} page="home" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

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
]