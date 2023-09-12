import React from 'react';

const CategoryFilter = ({ options }) => (
  options?.map((option, index) => 
      <a
        key={`${option.label}_${index}`} href={`${option.value}`} 
        className="nutino-extra-bold border rounded-lg border-red-200 bg-red-100 text-red-600 py-1 px-2 mr-6 tracking-wider hover:border-red-600 transition-all"
      >
        {option.label}
      </a>
    )
);


export default CategoryFilter;