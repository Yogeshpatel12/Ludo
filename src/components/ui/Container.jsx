const Container = ({ bg = "from-[#3a1669] to-[#3a17646e]", children }) => {
  return (
    <div className={`${bg} bg-gradient-to-b w-full h-auto py-6 md:py-8 lg:py-12 pb-16 px-4 lg:px-6`}>
      {children}
    </div>
  )
}

export default Container
