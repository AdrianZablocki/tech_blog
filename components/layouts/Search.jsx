'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    router.push(keyword ? `/?keyword=${keyword}` : '/');
  }

  return (
    <form
      className="flex flex-nowrap items-center md:order-none mt-5 md:mt-0"
      onSubmit={submitHandler}
    >
      <input
        className="appearance-none bg-gray-100 rounded-md mr-2 py-2 px-3 focus:outline-none focus:border-red-800 shadow-lg"
        type="text"
        placeholder="Enter your keyword"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button
        type="button"
        className="px-4 py-2 inline-block text-white border border-transparent bg-red-800 text-white rounded-md hover:bg-red-400 shadow-lg"
        onClick={submitHandler}
      >
        Search
      </button>
    </form>
  )
}

export default Search;