
function NavBar({setIsOpen}) {
  function OpenSidebar() {
    setIsOpen(true)
  }
  return (
    <nav className="flex items-center justify-between font-normal text-slate-400 font-sanser">
       <img src="/assets/images/logo.svg" className="w-12" />

       
      <div>
      <ul className="hidden  md:flex gap-4 cursor-pointer ">
            <li className="hover:text-[#f15d52]">Home</li>
            <li className="hover:text-[#f15d52]">New</li>
            <li className="hover:text-[#f15d52]">Popular</li>
            <li className="hover:text-[#f15d52]">Trending</li>
            <li className="hover:text-[#f15d52]">Categories</li>
        </ul>

        <img src="/assets/images/icon-menu.svg" alt="menu" role="button" onClick={()=>OpenSidebar()} className=" flex lg:hidden " />
      </div>
    </nav>
  )
}

export default NavBar