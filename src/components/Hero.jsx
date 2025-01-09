import { useWindowSize } from "@custom-react-hooks/use-window-size"
import { useState } from "react";
import { useEffect } from "react"


const largeScreen = "/assets/images/image-web-3-desktop.jpg ";
const smallScreen = "/assets/images/image-web-3-mobile.jpg";

function Hero() {

    const [img,setImg] = useState('')
    const {width} = useWindowSize()


  

    useEffect(()=>{
        if (width <= 700) {
            setImg(smallScreen)
        } else {
            setImg(largeScreen)
        }
    },[width])
  return (
    <div className="grid lg:grid-cols-[1fr,270px] gap-9 py-8">
        <section className="" >
            <div>
                <img src={img} className="" />
                <div className="lg:flex  items-center justify-between gap-3 py-5">
                    <div className="  lg:w-[40%] ">
                    <h3 className="font-sanser font-extrabold text-4xl lg:max-w-[200px] tracking-wider capitalize cursor-default pb-3 lg:pb-0">
                        The Bright Future of  web 3.0?
                    </h3>
                    </div>
                    
                    <div className="  ">
                        <p className=" text-base  max-w-[340px] tracking-wide text-slate-500 leading-5 cursor-default ">
                            We dive into the next world of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfulling its promise?
                        </p>
                        <button className="bg-[#00001a] text-white font-sanser font-bold text-sm mt-3 py-2 px-8 rounded-sm hover:bg-[#f15d52] hover:text-black hover:outline-none">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#00001a] py-6 px-4 font-sanser h-[420px]">
            <h2 className="text-orange-400 font-bold text-3xl pb-4 cursor-default ">New</h2>
            <div className="flex flex-col justify-center gap-6  divide-y-2 divide-gray-500 text-white">
                <div className="pt-2">
                    <h3 className="font-bold text-base hover:text-orange-400 cursor-pointer">Hydrogen VS Electric Cars</h3>
                    <p className="text-xs text-slate-300 tracking-wider leading-5 cursor-default">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="pt-5">
                    <h3 className="font-bold text-base hover:text-orange-400 cursor-pointer">The Downsides of AI Artistry</h3>
                    <p className="text-xs text-slate-300 tracking-wider leading-5 cursor-default">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="pt-5">
                    <h3 className="font-bold text-base hover:text-orange-400 cursor-pointer">Is VC Funding Drying Up?</h3>
                    <p className="text-xs text-slate-300 tracking-wider leading-5 cursor-default">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Hero