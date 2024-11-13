import { useEffect } from "react"

import Hero from "../components/homePage/Hero"
import TitleScroll from "../components/homePage/TitleScroll"
import ReferScroll from "../components/homePage/ReferScroll"
import DoYouKnow from "../components/homePage/DoYouKnow"
import StepsToDownload from "../components/homePage/StepsToDownload"
// import LakhBanner from "../components/homePage/LakhBanner"
import QuickWithdrawl from "../components/homePage/QuickWithdrawl"
import WhyChooseUs from "../components/homePage/WhyChooseUs"
import InstantWithdrawls from "../components/homePage/InstantWithdrawls"
// import OurPlayers from "../components/homePage/OurPlayers"
import FAQ from "../components/homePage/FAQ"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-black w-full">
      <Hero />
      <TitleScroll />
      <ReferScroll />
      <DoYouKnow />
      <StepsToDownload />
      {/* <LakhBanner /> */}
      <QuickWithdrawl />
      <WhyChooseUs />
      <InstantWithdrawls />
      {/* <OurPlayers /> */}
      <FAQ />
    </div>
  )
}

export default Home