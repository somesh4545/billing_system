import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFilters, setSearchValue } from "../app/customer.slice";
import { Company } from "..";

export default function CustomersListHeadings() {
  const dispatch = useDispatch();
  const { loadedCustomers, openFilters } = useSelector(
    (state: any) => state.customers
  );

  const setSearch = (e: any) => {
    let value = e.target.value;

    dispatch(setSearchValue(value ? value : null));
  };

  const _openFilters = () => {
    dispatch(setOpenFilters(true));
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

        <button
          className="relative flex items-center pl-7 pr-2.5 border rounded"
          onClick={_openFilters}
        >
          <img
            width={15}
            height={16}
            alt="Filter Icon"
            src="/svgs/filter.icon.svg"
            className="absolute top-1/2 -translate-y-1/2 left-2"
          />
          <span>Select Filters</span>
        </button>

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
      </div>
    </div>
  );
}
