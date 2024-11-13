import Button from "../ui/Button"

const InstantWithdrawls = () => {
  return (
    <section name="Instant Withdrawls" className="w-full bg-gradient-to-b from-[#4A1D6A] to-transparent pt-14 pb-6">
      <div className="w-full max-w-screen-2xl mx-auto px-4 space-y-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#9929EA] to-[#2A0D4D] px-6 pt-6 relative space-y-6">
          <div className="text-center">
            <h4 className="text-white font-bold text-xl">Instant Withdrawls</h4>
            <h5 className=" text-[#4BFF7D] font-bold text-[1.3rem]">Directly to Your Bank Account</h5>
          </div>
          <img src="/static/images/instant_payment_img.png" className="w-full h-auto" alt="" />
          <div className="absolute bottom-4 right-4 sm:bottom-20 sm:right-32 w-fit">
            <h2 className="text-2xl text-[#FFB317] font-bold uppercase">Easy & Fast</h2>
            <p className="text-xs text-white">Withdrawl Process</p>
            <div className="w-44 mt-4 h-10">
              <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" text="Download Now" classes="rounded-lg text-sm font-bold" />
            </div>
          </div>
        </div>
        <p className="text-xs text-white">
          Looking for a ludo app that lets you withdraw your earnings quickly and easily? Check out Ludo Vijayta Ludo app for cash winnings, the only choice for Ludo fans! With our rapid withdrawal feature, you can get your winnings in no time. Our app ensures that you can get your rewards whenever you need them, It provides you the full control of your gaming journey. No more waiting around for days - with Ludo Best App, fast withdrawals are just a click away. Get Ludo Best App now and enjoy the excitement of instant rewards!
        </p>
      </div>
    </section>
  )
}

export default InstantWithdrawls