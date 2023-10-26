import React from "react";

export default function CustomersStatusWidget() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between">
        <div className="w-9 h-9 bg-[#424242] rounded-lg grid place-items-center">
          <img src="/svgs/customers-light.icon.svg" alt="Customer Icon" />
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
              <td>All Customers</td>
              <td>Active</td>
              <td>In-Active</td>
            </tr>
          </thead>

          <tbody className="text-lg">
            <tr>
              <td>
                <span>70</span>
                <span className="text-xs ml-2 text-[#888888]">+15.80%</span>
              </td>
              <td>
                <span>58</span>
                <span className="text-xs ml-2 text-[#888888]">+85.00%</span>
              </td>
              <td>
                <span>10</span>
                <span className="text-xs ml-2 text-[#888888]">-10.00%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}