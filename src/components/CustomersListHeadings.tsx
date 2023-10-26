import React from "react";

export default function CustomersListHeadings() {
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
            className="border p-2.5 rounded pl-7"
          />
        </div>
      </div>
    </div>
  );
}
