import FilterComponent from './FilterComponent'
import { useFilterContext } from './FilterProvider'
const Filter = () => {

  const { handleFilterChange, filters } = useFilterContext()

  return (
    <div className="flex flex-col items-start">
        <FilterComponent title={'Department'} options={["Men", "Women", "Unisex"]}
        onFilterChange={handleFilterChange} filterType={'department'} selectedFilters={filters.department}/>
        <FilterComponent title={'Category'} options={["Headwear", "Tops", "Bottoms", "Footwear"]}
        onFilterChange={handleFilterChange} filterType={'category'} selectedFilters={filters.category}/>
        <FilterComponent title={'Size'} options={["OS", "S", "M", "L", "XL"]}
        onFilterChange={handleFilterChange} filterType={'size'} selectedFilters={filters.size}/>
    </div>
  )
}

export default Filter