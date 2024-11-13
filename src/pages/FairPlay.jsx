import { useEffect } from 'react'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'

const FairPlay = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className='w-full mx-auto max-w-screen-2xl'>
          <Heading title="Fairplay" />
          <div className="text-white text-sm my-8 text-left">
            <h4 className="font-bold"></h4>
            <div className="space-y-10 py-6">
              <p className="text-left">We at Ludo Vijayta want to ensure a fair game for you every time you play with us. We highly value transparency and integrity which is further reflected in our Fairplay Policy.</p>
              <div className='space-y-3'>
                <h4 className="font-bold">Equal Opportunity</h4>
                <p className="text-left">Our games ensure equal opportunities for all our users. The game rules and regulations apply to every player equally. We take every measure possible to avoid hacking or cheating on our platform. Deadlines are put in place for joining each tournament to ensure every user has an equal opportunity at the game.</p>
              </div>

              <div className='space-y-3'>
                <h4 className="font-bold">Playing Winning</h4>
                <p className="text-left">Our users must know upfront what potential winnings they could take home if they win when they sign up for a game. We want your experience on the games to be seamless and have taken the following steps to ensure you enter a tournament with full confidence:</p>
                <ul className="text-left list-disc pl-5 space-y-1">
                  <li> The scoring system used for calculating points is clearly illustrated and displayed for every new user being onboarded on our platform
                  </li>
                  <li> The applicable play money for winners of each game is mentioned. Any winnings/payouts are promptly processed and credited to the user&#39;s account as per our Terms and Conditions and other applicable Ludo Vijayta policies.
                  </li>
                  <li> Any cancellation fee or consequences for leaving the game mid-way or engaging in unfair gaming practices is also prescribed in this Fairplay Policy and the Terms of Use.
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Genuine, Verified Users</h4>
                <p>We strive to ensure that we only have genuine users playing Ludo Vijayta games. There are no robots allowed on the Platform (as defined in the Terms and Conditions). To facilitate this, we have put in place appropriate policies and protocols to check for any violation of the Ludo Vijayta FairPlay Policy. Before withdrawing any winnings, depending on the amount and/or frequency of the withdrawal, a user may be required to verify the user&#39;s identity, and account – e.g.: copies of PAN card & bank account details. These details and documents are collected and verified as prescribed by respective law or by regulatory authorities either by us directly, or via a third-party service provider.</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Communication</h4>
                <p className="text-left">Keeping in mind the importance of being accessible to our users, Ludo Vijayta has built processes where users can reach out and raise issues on our Helpdesk section. Resolutions to issues raised are provided within a short span and can be easily tracked by the users</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Protecting User Information</h4>
                <p className="text-left">Protecting User Information Ludo Vijayta deploys industry-leading data security protocols and measures to protect personal user information like PAN card details and bank account details. Any personal information shared with us is only used for user verification and is not disclosed to any outside parties except for in special cases where it is required to use their services for verification, or unless required to be disclosed under compulsion of law, or by law enforcement, regulatory or judicial authorities as provided in our Privacy Policy.</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Responsible Play</h4>
                <p className="text-left">Users below 18 years of age are not permitted to access or use the games provided on the Ludo Vijayta Platform. We do not allow users from certain States to play our games, as per the prevalent law in such states. The users are liable to ensure compliance with the applicable laws in their states and Ludo Vijayta is not liable for any breach of such laws by the User. We don&#39;t allow our users to participate in more than one tournament at the same time. You can read more about our Responsible Gaming policies in the Responsible Gaming section.</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Compliance with Law</h4>
                <p className="text-left">Ludo Vijayta is a skill-based platform that can help gamers improve their strategic prowess, decision-making, and time-management skills. Our games are 100% legal and are compliant with all the laws and regulations of the respective states.</p>
              </div>
              <div className='space-y-3'>
                <h4 className="font-bold">Fairplay and Prevention of Collusion & Fraud Policy</h4>
                <ul className="text-left list-disc pl-5 space-y-1">
                  <li>Ludo Vijayta is committed to promoting fair play on the platform. We might track gameplay to enforce our terms and policies, and appropriate action may be taken against any player(s) caught indulging in any form of abuse of policies, and/or collusion. By agreeing to the Terms and Conditions of this Platform, you agree not to indulge in any unfair game practice that might provide undue advantage to you or any other player.
                  </li>
                  <li>Any player found to be using duplicate accounts or using another person&#39;s account for unfair activities, for example, alleged or found adding money or withdrawing from/to an account suspected of being fraudulent, is liable to face legal consequences including, but not limited to, withholding any withdrawal or use of the player&#39;s balance and locking of the user&#39;s account.
                  </li>
                  <li> We reserve the right to take any necessary action, as we deem fit, against users who indulge in unfair means and practices. The action could range from penalties like temporary account suspension, and withdrawal blocking, to permanent account deactivation. If you suspect any player colluding in any game or involved in unfair practices, you can write to us at care@ludovijayta.com
                  </li>
                  <li>Please note that we can terminate or suspend your Account and all associated accounts, and institute fraud prevention measures such as access restrictions, transaction velocity restrictions, etc. without prior notice to prevent unauthorized use of our Accounts. You must cooperate with us in any investigation and use any fraud prevention measures we prescribe, and you agree that we will not be liable to you or any third party for any block, suspension, cancellation, or termination of your use of an Account owing to such measures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FairPlay