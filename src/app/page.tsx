export default function Home() {
  return (
    <main className="header flex flex-col justify-center items-center px-2">
      <div className="flex flex-col justify-center items-center gap-8 max-w-xl">
        <h1 className="xsm:text-3xl md:text-5xl font-bold text-center">FIND YOUR OWN STYLE</h1>
        <p className="xsm:text-lg md:text-xl font-semibold text-center">Buy and sell clothes, build your own style from our variety of clothes and accessories.</p>
        <div className="flex justify-center gap-8 w-full">
            <button className="w-1/2 border border-black py-4 font-bold xsm:text-xs md:text-sm transition-all duration-300 hover:bg-black hover:text-white">
                SHOP MENSWEAR
            </button>
            <button className="w-1/2 border border-black py-4 font-bold xsm:text-xs md:text-sm transition-all duration-300 hover:bg-black hover:text-white">
                SHOP WOMENSWEAR
            </button>
        </div>
      </div>
    </main>
  )
}
