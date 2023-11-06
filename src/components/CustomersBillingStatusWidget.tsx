import React from "react";
import { useSelector } from "react-redux";

export default function CustomersBillingStatusWidget() {
  const { loadedCustomers } = useSelector((state: any) => state.customers);

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between">
        <div className="w-9 h-9 bg-[#424242] rounded-lg grid place-items-center">
          <img
            src="/svgs/customers-billing-status-widget.icon.svg"
            alt="Customer Icon"
          />
        </div>

        <select className="text-xs">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
        </select>
      </div>

      <div className="pt-8">
        <table className="w-full">
          <thead className="text-[#888888] font-light text-sm">
            <tr>
              <td>New Customers</td>
              <td>New Billing</td>
            </tr>
          </thead>

          <tbody className="text-lg">
            <tr>
              <td>
                <span>{loadedCustomers.length}</span>
                <span className="text-xs ml-2 text-[#888888]">+100.00%</span>
              </td>
              <td>
                <span>{loadedCustomers.length * Math.round(Math.random() * 99)}</span>
                <span className="text-xs ml-2 text-[#888888]"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
