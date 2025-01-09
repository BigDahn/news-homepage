

function Sidebar({setIsOpen,isOpen}) {
  function closeSidebar() {
    setIsOpen(false)
  }
  return (
    <div className={`fixed right-0 top-0 bg-white w-[70%] h-[100vh] ${
        isOpen
          ? ' ease-linear transition-all duration-300 delay-100'
          : ' ease-linear transition-all duration-300  delay-100 '
      } lg:hidden`}>
        <div className="grid py-8 gap-16 px-6">
            <div className="flex justify-end" >
            <img src="/assets/images/icon-menu-close.svg" className="w-8" alt="close" role="button" onClick={()=>closeSidebar()}/>
            </div>
       
        <ul className="grid gap-5 cursor-pointer font-normal text-2xl ">
            <li className="hover:text-[#f15d52]">Home</li>
            <li className="hover:text-[#f15d52]">New</li>
            <li className="hover:text-[#f15d52]">Popular</li>
            <li className="hover:text-[#f15d52]">Trending</li>
            <li className="hover:text-[#f15d52]">Categories</li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar