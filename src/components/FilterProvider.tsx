"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
  department: string[];
  category: string[];
  size: string[];
}

interface FilterContextType {
  filters: Filters;
  handleFilterChange: (filterType: keyof Filters, filterValue: string, isChecked: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({
    department: [],
    category: [],
    size: []
  });

  const handleFilterChange = (filterType: keyof Filters, filterValue: string, isChecked: boolean) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (isChecked) {
        updatedFilters[filterType] = [...updatedFilters[filterType], filterValue];
      } else {
        updatedFilters[filterType] = updatedFilters[filterType].filter(value => value !== filterValue);
      }
      return updatedFilters;
    });
  };

  return (
    <FilterContext.Provider value={{ filters, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider')
  }
  return context
}