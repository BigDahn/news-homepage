
function Footer() {
  return (
    <section className="grid pt-3 lg:pt-0 lg:flex lg:justify-between gap-10 font-sanser">
<div className="flex lg:max-w-[270px]  gap-3">
  <img src="/assets/images/image-retro-pcs.jpg" alt="" className="w-20" />
  <div>
  <h3 className="font-extrabold text-2xl pb-1 text-[#f15d52]  ">01</h3>
  <h4 className="font-bold tex-base pb-2 hover:text-[#f15d52] cursor-pointer">Reviving Retro PCs</h4>
  <p className="text-xs  text-slate-400 leading-5">What happens when old PCs are given modern upgrades?</p>
  </div>
</div>
<div className="flex  lg:max-w-[300px] gap-3">
  <img src="/assets/images/image-top-laptops.jpg" alt="" className="w-20" />
  <div>
  <h3 className="font-extrabold text-2xl pb-1 text-[#f15d52]  ">02</h3>
  <h4 className="font-bold tex-base pb-2 hover:text-[#f15d52] cursor-pointer">Top 10 Laptops of 2022</h4>
  <p className="text-xs text-slate-400 leading-5">Our best picks for various <br /> needs and budgets.</p>
  </div>
</div>
<div className="flex  lg:max-w-[300px] gap-3">
  <img src="/assets/images/image-gaming-growth.jpg" alt="" className="w-20" />
  <div>
  <h3 className="font-extrabold text-2xl pb-1 text-[#f15d52] ">03</h3>
  <h4 className="font-bold tex-base pb-2 hover:text-[#f15d52] cursor-pointer">The Growth Of Gaming</h4>
  <p className="text-xs text-slate-400 leading-5">How the pandemic has sparked fresh opportunities.</p>
  </div>
</div>
      
    </section>
  )
}

export default Footer