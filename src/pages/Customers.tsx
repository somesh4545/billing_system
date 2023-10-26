import React from "react";
import CustomersStatusWidget from "../components/CustomersStatusWidget";
import CustomersBillingStatusWidget from "../components/CustomersBillingStatusWidget";

export default function Customers() {
  return (
    <div className="p-4">
      <div className="flex justify-between py-4">
        <span>Customers Summary</span>
        <button className="bg-blue-600 py-2 px-4 rounded text-white">
          + Add New Customer
        </button>
      </div>

      <div className="grid md:grid-row-1 md:grid-cols-[1fr_1fr] grid-cols-1 grid-row-[1fr_1fr] gap-4">
        <CustomersStatusWidget />
        <CustomersBillingStatusWidget />
      </div>
    </div>
  );
}
