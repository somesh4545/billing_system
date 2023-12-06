import React from "react";

export default function Pagination({
  from,
  limit,
  count,
  pageNumber,
  onChooseNextPage,
  onChoosePreviousPage
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <select
          className="bg-[#eff1f999] text-[#8b8d97] text-[12px] rounded-lg focus:outline-none p-0.5 me-2"
          disabled
        >
          <option defaultValue={"10"}>10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span className="text-gray-500 text-sm">Items per page</span>
        <span className="text-gray-500 text-sm">
          {" "}
          {from} - {limit} of {count} items{" "}
        </span>
      </div>
      <div className="flex items-center ">
        <span className="text-gray-500 text-sm ms-3">
          {pageNumber} of {Math.ceil(count / 10)} pages
        </span>
        <div className="flex ms-8">
          <img
            width={15}
            height={16}
            alt="Search Icon"
            className="cursor-pointer"
            onClick={onChoosePreviousPage}
            src="/svgs/chevron-left.icon.svg"
          />
          <img
            width={15}
            height={16}
            alt="Search Icon"
            onClick={onChooseNextPage}
            className="cursor-pointer"
            src="/svgs/chevron-right.icon.svg"
          />
        </div>
      </div>
    </div>
  );
}
