import { useEffect } from 'react'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'

const Legality = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className='w-full mx-auto max-w-screen-2xl'>
          <Heading title="Legality" />
          <div className="text-white text-sm my-8 text-left">
            <h4 className="font-bold"></h4>
            <div className="space-y-10 py-6">
              <p className="text-left">We at Ludo Vijayta want to ensure a fair game for you every time you play with us. We highly value transparency and integrity which is further reflected in our Fairplay Policy.</p>
              <div className='space-y-3'>
                <h4 className="font-bold">Game of Skills</h4>
                <p className="text-left">Ludo Vijayta is considered a “Game of Skill.” The game of skills can be defined as a game wherein the skills of the individuals participating in any online Esports gaming play a dominant role rather than the mere luck of the individuals. The individuals in the game of skills use their knowledge, skills, training, and attention for participation and winning.</p>
                <p>Online Esports gaming is considered to be a legal practice around the world with certain states being an exception. Online Esports gaming is entirely based on the concept of the Game of Skills.</p>
                <p>Ludo Vijayta is completely legal as it offers services, E-sports like Ludo. The services, contest(s), and program(s) related to online E-sports gaming offered by Ludo Vijayta are entirely dependent on the skills, knowledge, and attention of the users which makes online E-sports gaming offered at Ludo Vijayta a game of skills and 100% legal.</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Alignment with the Indian Laws</h4>
                <p className="text-left">The game of skills such as online Esports gaming is considered to be legal all over India. expect certain states such as Sikkim, Assam, Odisha, Telangana, and Nagaland. The Public Gambling Act, 1867 (“PGA, 1867”) is recognized as the primary legality driving the prevalence of gambling in India.</p>
                <p>The PGA defines the act of “public gambling” and the keeping of a common gaming house as a criminal and punishable act in India. However, online fantasy sports gaming is considered to be an exception under the PGA, wherein the provisions and punishments of the PGA shall not apply to games played by the user using their skills and knowledge as primary tools.</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Sikkim, Assam, Odisha, Telangana, and Nagaland</h4>
                <p className="text-left">There are various states in India wherein the laws related to the game of skills are unclear. In this regard, for the websites offering Esports gaming, it remains unclear whether to offer the services for free or not. The Indian states with no clearance regarding the offering of pay-to-play contests include Sikkim, Assam, Odisha, Telangana, and Nagaland.</p>
                <p>In this context, Ludo Vijayta does not permit the users identified as residents of Sikkim, Odisha, Telangana, Assam, and Nagaland to participate in the pay-to-play contest(s) organized by Ludo Vijayta.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Legality