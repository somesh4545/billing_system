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
  setCustomerDetailsPanelOpen,
  setCustomerSelectedIndex,
  setEditingAddressID,
  setEditingContactID,
  setLoadedCustomers,
  setSearchValue,
  setSelectedCustomer,
  updateWasRecordAdded,
} from "../app/customer.slice";
import ContactsList from "../components/ContactsList";
import UpdateCustomer from "../components/UpdateCustomerWidget";
import AddContact from "../components/AddContactWidget";
import AddAddress from "../components/AddAddressWidget";
import UpdateAddressWidget from "../components/UpdateAddressWidget";
import Pagination from "../components/Pagination";

export default function Customers() {
  const dispatch = useDispatch();

  const {
    isPanelOpen,
    isCustomerDetailsPanelOpen,
    addingAnotherContact,
    addingAnotherAddress,
    editingAddressID,
    editingContactID,
  } = useSelector((state: any) => state.customers);

  const [records, setRecords] = useState<number>(0);
  const [lastRecord, setLastRecord] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [recordsCursor, setRecordsCursor] = useState<number>(0);

  const resetAll = function () {
    dispatch(setSearchValue(""));
    dispatch(setLoadedCustomers([]));
    dispatch(setEditingAddressID(null));
    dispatch(setEditingContactID(null));
    dispatch(setSelectedCustomer(null));
    dispatch(setAddingAnotherAddress(null));
    dispatch(setAddingAnotherContact(null));
    dispatch(setCustomerSelectedIndex(null));
    dispatch(setCustomerDetailsPanelOpen(false));
  };

  const renderNextPage = () => {
    resetAll();
    setPageNumber((pageNumber) => pageNumber + 1);
    dispatch(updateWasRecordAdded(Math.random()));
  };

  const renderPreviousPage = () => {
    resetAll();
    setLastRecord(recordsCursor);
    setPageNumber((pageNumber) => pageNumber - 1);
    dispatch(updateWasRecordAdded(Math.random()));
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
            <CustomersList
              setRecords={setRecords}
              lastRecord={lastRecord}
              setLastRecord={setLastRecord}
              setRecordsCursor={setRecordsCursor}
            />
            {isCustomerDetailsPanelOpen && <ContactsList />}
            {isPanelOpen && !isCustomerDetailsPanelOpen && (
              <AddCustomerWidget />
            )}
            {isCustomerDetailsPanelOpen &&
              !addingAnotherContact &&
              !addingAnotherAddress && (
                <UpdateCustomer
                  editingAddressID={editingAddressID}
                  editingContactID={editingContactID}
                />
              )}
            {addingAnotherContact && !addingAnotherAddress && <AddContact />}
            {!addingAnotherContact && addingAnotherAddress && <AddAddress />}
            {!!editingAddressID && <UpdateAddressWidget />}
          </div>
          {/* <div className="border-t pt-4">
            <Pagination
              from={(pageNumber - 1) * 10}
              count={records}
              pageNumber={pageNumber}
              onChooseNextPage={renderNextPage}
              onChoosePreviousPage={renderPreviousPage}
              limit={pageNumber * 10 > records ? records : pageNumber * 10}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
