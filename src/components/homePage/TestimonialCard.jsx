
const TestimonialCard = ({ testimonial_img, message, name, winnings }) => {
  return (
    <div className='rounded-2xl bg-[#9729E7] w-full p-5'>
      <div className='flex items-center justify-start gap-4 flex-col sm:flex-row lg:flex-col mb-5'>
        <img src={testimonial_img} alt={name} className='size-60 md:size-52 rounded-full ' />
        <div className='text-white w-full sm:w-fit lg:w-full text-start'>
          <p className='text-xl font-bold'>{name}</p>
          <p className='text-sm font-semibold'><span className='fa-solid fa-circle-check text-green-500'></span> Verified Player</p>
        </div>
      </div>
      <div className='rounded-xl bg-[#2A0D4D] text-white p-5 space-y-4'>
        <p className='text-sm lg:text-xs text-start'>{message}</p>
        <div className="flex w-full flex-col gap-y-3">
          <button className='w-full text-center px-6 py-2 rounded-sm  bg-green-500'>Won {winnings}</button>
          <div className='flex items-center gap-2 justify-start w-full lg:w-fit'>
            <div className='text-yellow-500'>
              <span className='fa-solid fa-star'></span>
              <span className='fa-solid fa-star'></span>
              <span className='fa-solid fa-star'></span>
              <span className='fa-solid fa-star'></span>
              <span className='fa-solid fa-star'></span>
            </div>
            <span className='text-sm'>Rated 5 out of 5</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TestimonialCard