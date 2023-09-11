import Search from './Search';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-red-600 shadow-md mb-10">
      <a href='/' className=''>
        <div className="text-white nutino-extra-bold text-2xl tracking-wider">Technology blog</div>
        <div className="text-white nutino-extra-light text-sm">All what you want to know about new technologies</div>
      </a>
      {/* <span className="text-white nutino-extra-bold text-2xl tracking-wider">Technology blog</span> */}
      <Search />
    </div>
  )
}

export default Header;
