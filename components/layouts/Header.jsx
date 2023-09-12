'use client'

import { usePathname } from 'next/navigation';
import Search from './Search';

const Header = () => {
  const path = usePathname();

  return (
    <header className="mb-10">
      <div className="flex justify-between items-center p-5 bg-red-600 shadow-md">
        <a href='/' className="">
          <div className="text-white nutino-extra-bold text-2xl tracking-wider">Technology blog</div>
          <div className="text-white nutino-extra-light text-sm">All what you want to know about new technologies</div>
        </a>
        {/* <span className="text-white nutino-extra-bold text-2xl tracking-wider">Technology blog</span> */}
        <Search />
      </div>
      {path === "/" && <div>
        <a href="?categories=angular">angular</a>
        <a href="?categories=react">react</a>
        <a href="?categories=vue">vue</a>
        <a href="?categories=qwik">qwik</a>
      </div>}
    </header>
    
  )
}

export default Header;
