import { useEffect } from "react"
import Container from "../components/ui/Container"
import Heading from "../components/ui/Heading"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className="w-full max-w-screen-2xl mx-auto">
          <Heading title="About Us" />
          <div className="text-white text-sm my-8">
            <h4 className="font-bold">About Us</h4>
            <div className="space-y-10 py-6">
              <p className="text-left">Ludo Vijayta is the top ludo gaming app for playing Ludo and earning money online. It&#39;s like a digital version of everyone&#39;s favorite board game since childhood. Its interface is very user-friendly and it can compete against players worldwide. You can win real money and big rewards by showcasing your skills!</p>
              <p className="text-left">Ludo Vijayta prioritizes safety and ensures fair play, offering various tournaments and challenges for additional earnings and lucrative prizes. Moreover, you can connect with friends and enjoy games together. With its enjoyable gameplay, fairness, and constant improvements, Ludo Vijayta earns high ratings from many users worldwide. For a fun-filled Ludo experience with the chance to win, Ludo Vijayta is the only choice. Play Ludo Vijayta & Win Real Cash Today!</p>
              <p className="text-left">
                Ludo Vijayta provides top online ludo money games, offering players a variety of options to choose from and play according to their wish. You can enjoy instant withdrawallllllll of your earnings; we make sure a easy access to your winnings. We prioritize safety, implementing robust security measures for a secure gaming atmosphere.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About