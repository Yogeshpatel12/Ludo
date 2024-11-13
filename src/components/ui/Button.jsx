
const Button = ({ text, style = "green", classes = "", url = "/" }) => {
  return (
    <a href={url} target="_blank" className={`shadow-button w-full h-full relative overflow-hidden flex items-center justify-center uppercase text-center bg-gradient-to-b transition-all duration-200  text-white from-40% to-60% ${style === "green" ? "from-[#40CD65] to-[#05A370] shadow-[#05A370]" : "from-[#FFD31F] to-[#F4863E] shadow-[#F4863E]"} ${classes}`}>
      <div className="absolute top-0 left-0 h-full w-2 bg-white/35 animate-shiny-btn"></div>
      {text}
    </a>
  )
}

export default Button