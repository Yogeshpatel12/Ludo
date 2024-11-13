import Button from "../ui/Button"

const WhyChooseUs = () => {
  return (
    <section name="Instant Withdrawls" className="w-full bg-gradient-to-b to-[#4A1D6A] from-transparent py-5">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-10 space-y-6">
        <h3 className="text-white font-bold text-xl text-center">Why To Choose Us?</h3>
        <div className="w-full space-y-12 ">
          <div className="rounded-[3rem] bg-gradient-to-b from-[#9929EA] to-[#2A0D4D] px-6 pt-8 pb-14 w-full flex items-center justify-center relative">
            <img src="/static/images/Why_choose_us_icon.png" className="w-full h-auto max-w-[45rem]" alt="" />
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-3/4 max-w-80 h-12 md:h-16">
              <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" style="yellow" text="Start earning" classes="rounded-xl font-bold text-xl" />
            </div>
          </div>
          <p className="text-xs text-white">
            Ludo is the most loved board game in India, with almost everyone in the country having played it at least once. The excitement of the ludo game keeps people entertained, especially with technology improving and online gaming becoming more popular. Plus, with the emergence of ludo earning apps, players can now earn real money by playing online ludo cash games.
          </p>
          <p className="text-xs text-white">
            Ludo Vijayta provides top online ludo money games, offering players a variety of options to choose from and play according to their wish. You can enjoy instant withdrawal of your earnings; we make sure a easy access to your winnings. We prioritize safety, implementing robust security measures for a secure gaming atmosphere. It is certified by RNG, you can trust that the game is fair and random. In Case you require assistance, our dedicated customer support team is here to assist with any inquiries. With the Best Ludo App - Ludo Vijayta, Enjoy the excitement of playing Ludo on a reliable platform you can trust. Raise your Ludo experience – download Ludo Best App today!
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs