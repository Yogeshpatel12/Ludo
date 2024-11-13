import Button from "../ui/Button"

const Hero = () => {
  return (
    <section name="Hero" className=" w-full h-auto lg:pb-14">
      <div className="bg-primary lg:bg-transparent lg:bg-[url('/static/images/banner_large.png')] w-full lg:min-h-screen h-auto bg-no-repeat bg-center bg-cover relative pb-5">
        <div className="hidden lg:flex items-end justify-center w-full lg:min-h-screen h-auto relative">
          <div className="absolute left-0 xl:left-32 top-1/3 -translate-y-1/2 w-fit mt-10">
            <img src="/static/videos/logo-animation.gif" className=" w-[30rem] h-auto" alt="" />
            <div className="border-t-2 pt-4 ml-8 space-y-5 text-white font-bold uppercase">
              <p className="text-5xl">Now Earn</p>
              <p className="text-6xl">Real <span className="text-yellow-400">Money</span></p>
            </div>
          </div>
          <div className=" mx-auto w-[33rem] h-[6.5rem] -mb-[3.5rem]">
            <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" text="Play Now" classes="text-3xl rounded-3xl font-semibold sm:font-bold px-2 sm:px-10 py-1 sm:py-3" />
          </div>
        </div>
        <div className="lg:hidden mb-8">
          <div className="text-white text-center py-3">
            <h3 className="text-3xl font-bold uppercase">Now Earn <span className="text-hovered">Real Money</span></h3>
            <div className="bg-white h-[2px] w-72 mx-auto my-2"></div>
            <p className="text-lg">with INDIA&#39;s Most Trusted</p>
            <p className="text-lg">Ludo Earning App</p>
          </div>
          <img src="/static/images/banner_small.png" className="w-full h-auto mx-auto" alt="" />
          <div className=" mx-auto h-fit">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero