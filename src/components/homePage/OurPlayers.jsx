import TestimonialSlider from "./TestimonialSlider"

const OurPlayers = () => {
  return (
    <section name="Our Players" className="w-full bg-[url('/static/images/testmonial_background.png')] bg-cover pt-48 -mt-40">
      <h3 className="text-xl font-bold text-white text-center mb-5">Our Players Trust</h3>
      <div className="flex items-center justify-center w-full mb-5">
        <div className="w-48 h-16 pr-4 border-r-2 border-r-[#F8A642]">
          <img src="/static/images/Logo.png" className="object-contain" alt="" />
        </div>
        <div className="h-16 pl-4 pt-1">
          <img src="/static/images/trust.png" className="w-14 object-cover" alt="" />
        </div>
      </div>
      <div className="px-8">
        <TestimonialSlider testimonialsData={testimonialsData} />
      </div>
    </section>
  )
}

export default OurPlayers



const testimonialsData = [
  {
    id: "1",
    img: "/static/images/testimonial_1.png",
    name: "Suresh Chauhan",
    message: "Absolutely loved this game! Fairplay protected, fast and power packed performance, varieties of game modes, unique tournament format, and its 3D environment is a cherry on the top experience.",
    winnings: "3.5 Lacs"
  },
  {
    id: "2",
    img: "/static/images/testimonial_2.png",
    name: "Suresh Chauhan",
    message: "Absolutely loved this game! Fairplay protected, fast and power packed performance, varieties of game modes, unique tournament format, and its 3D environment is a cherry on the top experience.",
    winnings: "4.2 Lacs"
  },
  {
    id: "3",
    img: "/static/images/testimonial_1.png",
    name: "Suresh Chauhan",
    message: "Absolutely loved this game! Fairplay protected, fast and power packed performance, varieties of game modes, unique tournament format, and its 3D environment is a cherry on the top experience.",
    winnings: "3.5 Lacs"
  },
  {
    id: "4",
    img: "/static/images/testimonial_2.png",
    name: "Suresh Chauhan",
    message: "Absolutely loved this game! Fairplay protected, fast and power packed performance, varieties of game modes, unique tournament format, and its 3D environment is a cherry on the top experience.",
    winnings: "4.2 Lacs"
  }
]
