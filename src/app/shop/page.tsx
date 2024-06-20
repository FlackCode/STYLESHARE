"use client"
import Filter from "@/components/Filter";
import MobileFilterComponent from "@/components/MobileFilter";
import Product from "@/components/Product";
import { useState } from "react";
import products from "./productArray.json"
import { useFilterContext } from "@/components/FilterProvider";

export default function Shop() {
  const productArray = products
  const { filters } = useFilterContext()
  const [isOpen, setIsOpened] = useState(false)
  const [sortCriteria, setSortCriteria] = useState<string>("")

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value);
  }

  const handleMobileFilterOpen = () => {
    setIsOpened(!isOpen)
  }

  const calculateEmptyColumns = (columns: number) => {
    return (columns - (productArray.length % columns)) % columns
  }

  const emptyColumnsXsm = calculateEmptyColumns(2)
  const emptyColumnsMd = calculateEmptyColumns(4)
  const emptyColumnsXl = calculateEmptyColumns(5)

  const filteredProducts = productArray.filter(product => {
    const matchesDepartment = filters.department.length === 0 || filters.department.includes(product.department);
    const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
    const matchesSize = filters.size.length === 0 || filters.size.includes(product.size);
    return matchesDepartment && matchesCategory && matchesSize;
  })

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortCriteria === "cheapest") {
      return Number(a.price) - Number(b.price)
    } else if (sortCriteria === "most_expensive") {
      return Number(b.price) - Number(a.price)
    }
    return 0
  })

  return (
    <div className="px-4 md:px-8 xl:px-80 xsm:py-4 xl:py-16 flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold xsm:text-base md:text-lg">{sortedProducts.length} listings</p>
        <div className="flex gap-4 items-center">
          <select className='xsm:text-xs md:text-sm font-semibold border-1 border-black px-2 py-1 focus:outline-none' value={sortCriteria} onChange={handleSortChange}>
            <option value="" disabled>Sort By</option>
            <option value="0">Default</option>
            <option value="cheapest">Cheapest</option>
            <option value="most_expensive">Most Expensive</option>
          </select>
          <button className='text-white bg-black border border-black px-2 py-1 xsm:flex md:hidden 
            text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:text-gray-200' 
            onClick={handleMobileFilterOpen}>FILTER</button>
        </div>
      </div>
      <div className={isOpen ? 'xsm:block md:hidden' : 'xsm:hidden md:hidden'}>
        <MobileFilterComponent isOpen={handleMobileFilterOpen}/>
      </div>
      <div className="grid xsm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="col-span-1 xsm:hidden md:block">
          <Filter />
        </div>
        <div className="xsm:col-span-2 md:col-span-3 xl:col-span-4 py-2 h-fit flex flex-wrap">
          {filteredProducts.map((product, index) => (
            <Product 
              key={index} 
              image={product.image} 
              brand={product.brand} 
              size={product.size}
              name={product.name}
              price={product.price} />
          ))}
          {Array.from({ length: emptyColumnsXsm }).map((_, index) => (
            <div key={`empty-xsm-${index}`} className="xsm:block md:hidden xl:hidden w-1/2 h-full xsm:p-1"></div>
          ))}
          {Array.from({ length: emptyColumnsMd }).map((_, index) => (
            <div key={`empty-md-${index}`} className="hidden md:block xl:hidden w-1/4 h-full md:p-2"></div>
          ))}
          {Array.from({ length: emptyColumnsXl }).map((_, index) => (
            <div key={`empty-xl-${index}`} className="hidden xl:block w-1/5 h-full xl:p-4"></div>
          ))}
        </div>
      </div>
    </div>
  )
}