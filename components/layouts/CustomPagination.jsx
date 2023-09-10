"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, articlesCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage) => {
    if (typeof window !== undefined) {
      queryParams = new URLSearchParams(window.location.search);
      queryParams.has('page') ? queryParams.set('page', currentPage) : queryParams.append('page', currentPage);

      const path = `${window.location.pathname}?${queryParams.toString()}`
    
      router.push(path);
    }
  };

  return (
    <div className="flex mt-20 justify-center nutino-extra-bold text-gray-800">
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={articlesCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="relative inline-flex items-center border border-gray-300 rounded-lg bg-white px-4 py-2 text-sm mr-5 font-medium text-gray-900 hover:bg-red-600 hover:text-white focus:z-20 transition-all"
        activeLinkClassName="z-10 inline-flex items-center bg-gray-400 text-sm font-medium focus:z-20"
        activeClass="z-10 inline-flex items-center text-sm font-medium bg-gray-300 focus:z-20"
      />
    </div>
  );
};

export default CustomPagination;
