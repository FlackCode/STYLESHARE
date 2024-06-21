import { BsSearch, BsPersonFill } from 'react-icons/bs'
import Link from 'next/link';

const Nav = () => {
  const isLoggedIn = false

  return (
    <div className="text-background py-4 px-2 xl:px-80 border-b sticky">
      <div className="grid xsm:grid-cols-1 xl:grid-cols-6 items-center gap-2">
        <div className="flex flex-row justify-between items-center col-span-1 xl:col-span-6">
          <Link href={'/'} className="xsm:text-sm xl:text-2xl font-semibold tracking-tighter xsm:text-center xl:text-left">STYLESHARE</Link>
          <div className='flex flex-row gap-2 items-center'>
            <Link href={isLoggedIn ? '/sell' : '/login'} className='border px-4 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:border-black'>
              SELL
            </Link>
            <Link href={'/shop'} className='border px-2 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:border-black'>SHOP</Link>
            <Link href={isLoggedIn ? '/' : '/login'} 
            className={isLoggedIn ? 'hidden' : 'border px-2 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:border-black'}>LOGIN</Link>
            <Link href={isLoggedIn ? '/' : '/register'} 
            className={isLoggedIn ? 'hidden' : 'text-white bg-black border border-black px-2 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:text-gray-200 hover:scale-110'}>REGISTER</Link>  
            <Link href={'/profile'} className={isLoggedIn ? 'w-8 h-8 rounded-full border p-2 flex justify-center items-center transition-all duration-300 hover:border-black' : 'hidden'}>
              <BsPersonFill />
            </Link>
          </div>
        </div>
        <form className="border border-black flex flex-row items-center p-2 rounded-sm w-full col-span-1 xl:col-span-6">
          <label htmlFor="search" className='px-2'>
            <BsSearch />
          </label>
          <input type="text" id="search" className='flex-1 h-full px-2 py-2 border-none focus:outline-none' placeholder='Search...' />
          <button className='border px-2 py-1 text-sm font-semibold transition-all duration-300 hover:border-black'>
            GO
          </button>
        </form>
      </div>
    </div>
  )
}

export default Nav