import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Button from '../components/ui/Button'

const HowToPlay = ({ gameTitle, gameDescription, gameLogo, bgLogo, rules }) => {
  console.log(bgLogo);
  return (
    <div className="bg-[#070210]">
      <section name="how-to-play">
        <Container>
          <div className='w-full h-auto relative max-w-screen-2xl mx-auto'>
            <img className='w-16 md:w-28 lg:w-fit h-auto absolute -z-0 -top-0 lg:top-5 left-0  max-lg:max-w-28' src="static/images/how_to_left_coin.png" alt="" />
            <img className='w-36 lg:w-fit h-auto absolute -z-0 top-0 lg:-top-5 right-0 hidden md:block max-lg:max-w-44' src={bgLogo} alt="" />
            <img className='w-[7.5rem] lg:w-fit h-auto absolute -z-0 -bottom-5 md:left-0 lg:left-16 xl:left-36  hidden md:block' src="/static/images/ludo_box.png" alt="" />
            <img className='w-24 lg:w-fit h-auto absolute -z-0 bottom-0 md:right-0 lg:right-16 xl:right-36  hidden md:block' src="/static/images/how_to_right_coin.png" alt="" />
            <Heading title="How To Play" />
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-full mt-16'>
              <div className=' size-52 md:size-60 lg:size-[270px] border-4 rounded-3xl md:rounded-[2rem] border-[#FA9A22] overflow-hidden'>
                <img className='w-full h-52 md:h-60 lg:h-[270px]  object-cover ' src={gameLogo} alt="" />
              </div>
              <div className='space-y-2 w-full  md:max-w-fit'>
                <h2 className='border-b-[3px] border-b-[#FA9A22] text-[#FA9A22] text-3xl md:text-6xl font-bold py-3 flex md:flex-col justify-start gap-3 md:gap-0'>
                  <span className='text-[#FA9A22]'>{gameTitle}</span>
                  <span className='text-[#F83600] '>{gameTitle == "Solo" ? "Token" : "Mode"}</span>
                </h2>
                <p className='text-white text-base'>{gameDescription}</p>
                <div className='mt-4 w-full h-12 md:h-14'>
                  <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" text="Download" classes='rounded-sm md:rounded-xl lg:rounded-2xl w-full font-bold md:text-xl lg:text-2xl' />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* <section name="how-to-play-video">
        <Container bg="to-[#3a1669] from-[#3a17646e]">
          <div className='max-w-screen-2xl mx-auto md:px-10'>
            <div className='overflow-hidden rounded-[2rem] border-4 border-[#FFB217]'>

              <iframe className='w-full h-64 lg:h-[38rem]' src="https://www.youtube.com/embed/fVGpQ8KAkH0?si=XJNL8igJJhv-LVPD&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
            </div>
          </div>
        </Container>
      </section> */}
      {/* <section name="how-to-play-text">
        <Container>
          <div className='max-w-screen-2xl mx-auto w-full'>
            <h3 className='text-[#FFBF1A] text-xl lg:text-3xl font-bold mb-5'>How to Play?</h3>
            <ul className='space-y-3 text-sm lg:text-lg text-white font-semibold pl-5'>
              {stepsToPlay.map((step, idx) => {
                return (
                  <li key={idx} className={`${idx == 0 && "text-[#FFBF1A]"} list-disc`}>{step}</li>
                )
              })}
            </ul>
          </div>
        </Container>
      </section> */}
      <section name="why-ludo-vijayta">
        <Container bg="to-[#3a1669] from-[#3a17646e]">
          <div className='w-full max-w-screen-2xl mx-auto'>
            <h3 className='text-[#FFBF1A] text-xl lg:text-2xl text-center mb-5 lg:font-bold lg:-mb-8'>Why Ludo Vijayta</h3>
            <div className='w-full relative lg:h-96 '>
              {/* <img src="/static/images/why_ludo_warrior.png" className='w-full -my-6 hidden lg:block' alt="" /> */}
              <div className="flex w-full items-center justify-between lg:absolute top-[20%] left-0 lg:px-12 flex-wrap gap-y-6">
                {whyLudoVijayta.map(({ id, image, text }) => (
                  <div key={id} className='flex items-center justify-between flex-col w-[32%] lg:w-[13%] '>
                    <img src={image} alt="" className='w-2/3' />
                    <div className='text-center text-white text-sm font-medium'>
                      <p>
                        {text[0]}
                      </p>
                      <p>
                        {text[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" mx-auto w-full lg:w-[23rem] h-12 lg:h-20 mt-8 lg:-mt-20">
              <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" text="Play Now" classes="md:text-xl rounded-sm lg:rounded-3xl font-semibold sm:font-bold px-2 lg:text-2xl" />
            </div>
          </div>
        </Container>
      </section>
      <section name="how-to-play-rules">
        <Container>
          <div className='max-w-screen-2xl mx-auto w-full'>
            <h3 className='text-[#FFBF1A] text-xl lg:text-3xl font-bold mb-5'>Rules:</h3>
            <ol className='space-y-3 text-sm lg:text-lg text-white font-semibold pl-5 list-decimal'>
              {rules.map((rule, idx) => {
                const { title, description } = rule

                {/* if (Array.isArray(description))
                  return (
                    <li key={idx} className='space-y-3 text-white'>
                      <p className='font-bold text-lg text-[#FFBF1A]'>{title}:</p>
                      <ol className='list-disc space-y-2 text-base pl-2'>
                        {description.map((point, id) => (
                          <li key={id}>{point}</li>
                        ))}
                      </ol>

                    </li>
                  )
                return (
                  <li key={idx} className={`${idx == 0 && "text-[#FFBF1A]"} list-disc`}>
                    <p className='font-bold text-lg text-[#FFBF1A]'>{title}:</p>
                    <ol className='list-disc space-y-2 text-base pl-2'>
                      <li>{description}</li>
                    </ol>
                  </li>
                ) */}

                return (
                  <li key={idx} className='space-y-2 text-white'>
                    <p className='font-bold text-lg text-[#FFBF1A] decoration-[#FFBF1A]'>{title}:</p>
                    <ol className='list-disc space-y-1 text-sm pl-2 font-normal'>
                      {description.map((point, id) => (
                        <li key={id}>{point}</li>
                      ))}
                    </ol>

                  </li>
                )
              })}
            </ol>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HowToPlay;


const stepsToPlay = [
  "To play Ludo Vijayta Online Multiplayer Game, please follow the below steps:",
  "Choose the Ludo Vijayta Online Game. For ease of access, we have a Head to Head (1 vs 1) format for all players.",
  "Select Battle With / Without an entry fee and join the game.",
  "Tap the Ludo Dice online, once you get your turn.",
  "You don't need a “6” to start playing. All tokens are in the open position.",
  "Every box moved = 1 point.",
  "For each Ludo token that you take home, you earn extra “+50” points.",
  "You will have 10 minutes to score maximum points than your opponent to wear a winner's crown."
]

const whyLudoVijayta = [
  {
    id: "1",
    image: "/static/images/why-ludo-1.png",
    text: ["Instant", "withdrawal"]
  },
  {
    id: "2",
    image: "/static/images/why-ludo-2.png",
    text: ["100 % Safe &", "Secure"]
  },
  {
    id: "3",
    image: "/static/images/why-ludo-3.png",
    text: ["Referral", "Earnings"]
  },
  {
    id: "4",
    image: "/static/images/why-ludo-4.png",
    text: ["24x7", "Tournaments"]
  },
  {
    id: "5",
    image: "/static/images/why-ludo-5.png",
    text: ["RNG", "Certified"]
  },
  {
    id: "6",
    image: "/static/images/why-ludo-6.png",
    text: ["Dedicated", " Customer Support"]
  }
]