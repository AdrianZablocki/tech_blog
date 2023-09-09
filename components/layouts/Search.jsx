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
      className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
      onSubmit={submitHandler}
    >
      <input
        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        type="text"
        placeholder="Enter your keyword"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button
        type="button"
        className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={submitHandler}
      >
        Search
      </button>
    </form>
  )
}

export default Search;