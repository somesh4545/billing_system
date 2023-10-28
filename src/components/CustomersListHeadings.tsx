import React from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../app/customer.slice";

export default function CustomersListHeadings() {
  const dispatch = useDispatch();

  const setSearch = (e: any) => {
    let value = e.target.value;

    dispatch(setSearchValue(value ? value : null));
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-xl">Customers</span>
      <div className="text-xs flex gap-4">
        <div className="border w-max p-2 rounded">
          <select className="cursor-pointer">
            <option value="all">Select all customers</option>
            <option value="active">Select active customers</option>
            <option value="inactive">Select inactive customers</option>
          </select>
        </div>

        <div className="relative">
          <img
            width={15}
            height={16}
            alt="Search Icon"
            src="/svgs/search.icon.svg"
            className="absolute top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="text"
            placeholder="Search"
            onChange={setSearch}
            className="border p-2.5 rounded pl-7"
          />
        </div>

        {/* <div className="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#00000050] grid place-items-center">
          <div className="bg-white w-full max-w-xs p-4 rounded">
            <h2 className="text-md">Filters</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}
