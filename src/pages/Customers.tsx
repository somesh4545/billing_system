import React, { useState } from "react";
import CustomersStatusWidget from "../components/CustomersStatusWidget";
import CustomersBillingStatusWidget from "../components/CustomersBillingStatusWidget";
import CustomersListHeadings from "../components/CustomersListHeadings";
import CustomersList from "../components/CustomersList";
import AddCustomerWidget from "../components/AddCustomerWidget";
import { useDispatch, useSelector } from "react-redux";
import {
  openPanel,
  setAddingAnotherAddress,
  setAddingAnotherContact,
} from "../app/customer.slice";
import ContactsList from "../components/ContactsList";
import UpdateCustomer from "../components/UpdateCustomerWidget";
import AddContact from "../components/AddContactWidget";
import AddAddress from "../components/AddAddressWidget";
import AddAddressAndContact from "../components/AddAddressAndContact";

export default function Customers() {
  const dispatch = useDispatch();

  const {
    isPanelOpen,
    isCustomerDetailsPanelOpen,
    addingAnotherContact,
    addingAnotherAddress,
  } = useSelector((state: any) => state.customers);

  const reset = () => {
    dispatch(setAddingAnotherContact(false));
    dispatch(setAddingAnotherAddress(false));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between py-4">
        <span>Customers Summary</span>
        <button
          onClick={() => {
            dispatch(openPanel());
          }}
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
          <div
            className={
              isPanelOpen || isCustomerDetailsPanelOpen
                ? "grid gap-4 grid-rows-1 " +
                  (isCustomerDetailsPanelOpen
                    ? "grid-cols-[auto_1fr_1fr]"
                    : "grid-cols-[auto_1fr]")
                : ""
            }
          >
            <CustomersList />
            {isCustomerDetailsPanelOpen && <ContactsList />}
            {isPanelOpen && !isCustomerDetailsPanelOpen && (
              <AddCustomerWidget />
            )}
            {isCustomerDetailsPanelOpen &&
              !addingAnotherContact &&
              !addingAnotherAddress && <UpdateCustomer />}
            {addingAnotherContact && !addingAnotherAddress && <AddContact />}
            {!addingAnotherContact && addingAnotherAddress && <AddAddress />}
            {addingAnotherContact && addingAnotherAddress && (
              <AddAddressAndContact />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
