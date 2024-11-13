import { Link } from "react-router-dom";

import Button from "./ui/Button";

const Footer = () => {
  return (
    <section className="bg-[#170C29] py-10 pb-44 sm:pb-72 lg:pb-10 w-full h-auto relative">
      <div className="mx-auto px-3 md:px-8 lg:px-14 space-y-12 max-w-screen-2xl mb-5">
        <div className="px-4">
          <img src="/static/images/footer-logo.png" className="w-fit" alt="" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-10">
          <div className="text-white space-y-10 px-1 lg:px-3">
            <ul className="space-y-3">
              <li className="text-xl md:text-2xl lg:text-3xl font-bold ">Company</li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer "><Link to="/legality"> Legal </Link></li>
            </ul>
            <ul className="space-y-3">
              <li className="text-xl md:text-2xl lg:text-3xl font-bold ">Legal</li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/terms-and-conditions'> Terms & Conditions </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/fairplay'> Fairplay Policy </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/privacy-policy'> Privacy Policy </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/about'> About Us </Link></li>
            </ul>
          </div>
          <div className="text-white px-1 lg:px-3">
            <ul className="space-y-3">
              <li className="text-xl md:text-2xl lg:text-3xl font-bold ">Unique Modes</li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/classic'> Vijayta Classic </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/timer'> Vijayta Timer </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/quick-move'> Vijayta Quick Mode </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/solo'> Solo Token</Link></li>
            </ul>
          </div>
          <div className="text-white px-1 lg:px-3">
            <ul className="space-y-3">
              <li className="text-xl md:text-2xl lg:text-3xl font-bold ">Others</li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/responsible-gaming'> Play Responsibly </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/faq'> FAQs </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/'> Blogs </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/'> Sitemap </Link></li>
              <li className="text-base lg:text-xl hover:text-[#b59bde] duration-200 transition-all font-medium cursor-pointer"><Link to='/'> Android App </Link></li>
            </ul>
          </div>
          <div className="relative">
            <img src="/static/images/footer-rating-img.png" alt="" className="absolute bottom-0 w-fit max-h-72 lg:w-full h-auto lg:max-h-max" />
          </div>
        </div>
        <div className="py-4 border-y-2 border-[#483E58]">
          <ul className="flex flex-wrap gap-y-3 lg:gap-y-0 lg:flex-nowrap items-center justify-between">
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg  text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/fairplay' className="w-fit"> Fairplay </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/responsible-gaming' className="w-fit"> Responsible Gaming </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/tds-policy' className="w-fit"> TDS Deduction Policy </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/terms-and-conditions' className="w-fit"> Terms & Conditions </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/legality' className="w-fit"> Legality </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/refund-policy' className="w-fit"> Refund and Cancellation Policy </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/privacy-policy' className="w-fit"> Privacy Policy </Link>
            </li>
            <li className=" w-1/2 lg:w-auto text-start text-base xl:text-lg text-[#CDB472] hover:text-[#dcaaff] transition-all duration-200 cursor-pointer">
              <Link to='/about' className="w-fit"> About Us </Link>
            </li>
          </ul>
        </div>
        <div className="w-full pt-2">
          <h3 className="text-center font-bold text-white text-3xl mb-12"> Secured Payments by</h3>
          <div className="flex items-center justify-around gap-1 md:gap-4">
            <div className="bg-white h-3/5 max-h-20 py-2 md:py-4 flex items-center justify-center rounded-lg w-full"><img className="w-40 h-auto" src="/static/images/Paytm.png" alt="" /></div>
            <div className="bg-white h-3/5 max-h-20 py-2 md:py-4 flex items-center justify-center rounded-lg w-full"><img className="w-40 h-auto" src="/static/images/GP.png" alt="" /></div>
            <div className="bg-white h-3/5 max-h-20 py-2 md:py-4 flex items-center justify-center rounded-lg w-full"><img className="w-40 h-auto" src="/static/images/UP.png" alt="" /></div>
            <div className="bg-white h-3/5 max-h-20 py-2 md:py-4 flex items-center justify-center rounded-lg w-full"><img className="w-40 h-auto" src="/static/images/PP.png" alt="" /></div>
            <div className="bg-white h-3/5 max-h-20 py-2 md:py-4 flex items-center justify-center rounded-lg w-full"><img className="w-40 h-auto" src="/static/images/BT.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="pt-8 text-white w-full lg:px-14  mx-auto text-center max-w-screen-2xl border-t-2">
        <p> Copyright © 2024 EIRUPSKILLS INFOTECH LLP </p>
        <p>All Rights Reserved</p>
      </div>
      <div className="fixed bottom-0 inset-x-0 z-[90] h-40 w-full lg:hidden">
        <img src="/static/images/bottom_img_fixed.png" className="absolute w-full bottom-0" alt="" />
        <div className="min-w-36 w-1/3 ml-auto absolute right-3 sm:right-10 bottom-3 sm:bottom-10">
          <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" text="Download Now" style="yellow" classes="text-black font-semibold text-sm md:text-lg py-2 rounded-lg sm:rounded-xl px-1 sm:px-3" />
        </div>
      </div>
    </section>
  )
}

export default Footer;