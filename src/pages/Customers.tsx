import React, { useState } from "react";
import CustomersStatusWidget from "../components/CustomersStatusWidget";
import CustomersBillingStatusWidget from "../components/CustomersBillingStatusWidget";
import CustomersListHeadings from "../components/CustomersListHeadings";
import CustomersList from "../components/CustomersList";
import AddCustomerWidget from "../components/AddCustomerWidget";

export default function Customers() {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between py-4">
        <span>Customers Summary</span>
        <button
          onClick={() => setOpenPanel(true)}
          className="bg-blue-600 py-2 px-4 rounded text-white"
        >
          + Add New Customer
        </button>
      </div>

      <div className="grid gap-4">
        <div className="grid md:grid-row-1 md:grid-cols-[1fr_1fr] grid-cols-1 grid-row-[1fr_1fr] gap-4">
          <CustomersStatusWidget />
          <CustomersBillingStatusWidget />
        </div>

        <div className="bg-white rounded-xl p-4 grid gap-8 w-full">
          <CustomersListHeadings />
          <div className={openPanel ? "grid grid-cols-[auto_1fr] gap-4 grid-rows-1" : ""}>
            <CustomersList openPanel={openPanel} closePanel={() => setOpenPanel(false)} />
            {openPanel && <AddCustomerWidget closePanel={() => setOpenPanel(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
}
