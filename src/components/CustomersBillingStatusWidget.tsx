import React from "react";

export default function CustomersBillingStatusWidget() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between">
        <div className="w-9 h-9 bg-[#424242] rounded-lg grid place-items-center">
          <img src="/svgs/customers-billing-status-widget.icon.svg" alt="Customer Icon" />
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
                <span>20</span>
                <span className="text-xs ml-2 text-[#888888]">+20.00%</span>
              </td>
              <td>
                <span>657</span>
                <span className="text-xs ml-2 text-[#888888]"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
