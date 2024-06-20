import { useState } from "react"
import { BsPlus, BsDash } from 'react-icons/bs'

const PriceComponent = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const handleOpen = () => {
      setIsOpened(!isOpened)
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMinPrice(event.target.value)
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(event.target.value)
    };

    return (
      <div className="py-4 w-full font-semibold text-left border-b-1 select-none">
        <div className="cursor-pointer" onClick={handleOpen}>
          <p className="flex justify-between w-full items-center">Price {isOpened ? <BsDash className='text-xl'/> : <BsPlus className='text-xl'/>}</p>
        </div>
        {isOpened && (
          <div className="mt-4 flex flex-col gap-2">
            <input
              type="text"
              className="border border-black px-2 py-1"
              placeholder="Min"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="text"
              className="border border-black px-2 py-1"
              placeholder="Max"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        )}
      </div>
    )
}

export default PriceComponent