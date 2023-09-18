'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation'


const CategoryFilter = ({ options, path }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('categories')

  const baseStyles = 'nutino-extra-bold border rounded-lg border-red-200 bg-red-100 text-red-600 py-1 px-2 mr-6 mt-3 tracking-wider hover:border-red-600 transition-all capitalize';
  const activeStyles = 'bg-red-600 text-white';
  
  return (
    options?.map((option, index) => 
      <a
        key={`${option.label}_${index}`} href={`${option.value}`} 
        className={`${baseStyles} ${option.label=== search ? activeStyles : ''}`}
      >
        {option.label}
      </a>
    )
  )
};


export default CategoryFilter;