import { BsHeart } from 'react-icons/bs'

const Product = ({ image, brand, size, name, price } : 
    {image: string, brand: string, size: string, name:string, price:string}) => {
  return (
    <div className="flex flex-col w-1/3 h-full xsm:p-1 md:p-2 xl:p-4 cursor-pointer">
      <div className="h-40 md:h-52 xl:h-80 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col mt-2">
        <hr />
        <div className="flex justify-between mt-2">
          <p className="font-bold text-xxs md:text-base xl:text-sm truncate uppercase">{brand}</p>
          <p className="font-semibold text-xxs md:text-base xl:text-sm">{size}</p>
        </div>
        <p className="text-xxs md:text-base xl:text-sm mt-1 truncate">{name}</p>
        <div className='flex justify-between items-center mt-2'>
          <p className="font-bold tracking-wider underline underline-offset-2 text-xxs md:text-base xl:text-sm mt-1">${price}</p>
          <button>
            <BsHeart className='xsm:text-xs md:text-sm'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product