import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
    const [isOpen,setIsOpen] =useState(false)
    return (
        <div className="max-w-6xl my-3 mx-auto px-8 lg:px-20 ">
            {isOpen && <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />}
            <NavBar setIsOpen={setIsOpen}/>
            <Hero/>
            <Footer/>
        </div>
    );
}

export default App;
