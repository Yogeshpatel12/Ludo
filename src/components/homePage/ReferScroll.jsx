const ReferScroll = () => {
  return (
    <section name="Refer Scroll Slide" className="w-full py-4 bg-black relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-fit min-w-[50%] md:min-w-fit z-50 bg-[#9729E7] rounded-r-lg md:rounded-r-xl font-bold text-white px-8 md:px-12 py-2 md:py-4 shadow-custom">
        Refer Now & Win More
      </div>
      <div className=" w-full overflow-x-hidden bg-[#9729E7] text-white relative">
        <div className="flex items-center gap-12 w-fit py-1  animate-referslide">
          {referData.map((data, id) => (
            <div key={id} className="min-w-fit text-lg "> {data}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReferScroll


const referData = [
  "Vidhya just earned Rs 20 Referral Bonus",
  "Manav just earned Rs 20 Referral Bonus",
  "Aman just earned Rs 20 Referral Bonus",
  "Gokul just earned Rs 20 Referral Bonus",
  "Nikhil just earned Rs 20 Referral Bonus",
  "Vishal just earned Rs 20 Referral Bonus",
  "Rima just earned Rs 20 Referral Bonus",
  "Kuldeep just earned Rs 20 Referral Bonus",
]