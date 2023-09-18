'use client'

import { usePathname } from 'next/navigation';
import Search from './Search';
import { categoryFilers } from './filters/filters-helper';
import CategoryFilter from './filters/CategoryFilter';

const Header = () => {
  const path = usePathname();
  
  return (
    <header className="mb-10">
      <div className="flex sm:justify-between items-start sm:items-center p-5 bg-red-600 shadow-md flex-col sm:flex-row">
        <a href='/' className="">
          <div className="text-white nutino-extra-bold text-2xl tracking-wider">Technology blog</div>
          <div className="text-white nutino-extra-light text-sm">All what you want to know about new technologies</div>
        </a>
        <Search />
      </div>
      { path === "/" && 
        <div className="flex flex-wrap px-5 pb-3 shadow">
          <CategoryFilter options={categoryFilers} path={path} />
        </div>
      }
    </header>
    
  )
}

export default Header;
