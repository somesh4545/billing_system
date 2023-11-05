import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <select className="bg-[#eff1f999] text-[#8b8d97] text-[12px] rounded-lg focus:outline-none p-0.5 me-2">
          <option defaultValue={"10"}>10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span className="text-gray-500 text-sm">Items per page</span>
        <span className="text-gray-500 text-sm"> 1 - 10 of 70 items </span>
      </div>
      <div className="flex items-center ">
        <select className="bg-[#5e636614] text-[#8b8d97] text-[12px] rounded-lg focus:outline-none p-0.5 me-2">
          <option defaultValue={"1"}>1</option>
          <option value="2<">2</option>
          <option value="3<">3</option>
          <option value="4<">4</option>
        </select>
        <span className="text-gray-500 text-sm ms-3">of 7 pages</span>
        <div className="flex ms-8">
          <img
            width={15}
            height={16}
            alt="Search Icon"
            src="/svgs/chevron-left.icon.svg"
            className=""
          />
          <img
            width={15}
            height={16}
            alt="Search Icon"
            src="/svgs/chevron-right.icon.svg"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
