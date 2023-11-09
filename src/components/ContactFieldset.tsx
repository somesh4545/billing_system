import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddingAnotherAddress,
  setAddingAnotherContact,
  setEditingContactID,
} from "../app/customer.slice";

export default function ContactFieldset() {
  const dispatch = useDispatch();
  const contactIDRef = useRef<number>();
  const { customerSelected, wasRecordAdded } = useSelector((state: any) => state.customers);

  const [contacts, setContacts] = useState([]);

  function addContact() {
    dispatch(setAddingAnotherAddress(false));
    dispatch(setAddingAnotherContact(true));
  }

  function setEditingContactIDValue(value) {
    dispatch(setEditingContactID(value));
  }

  useEffect(
    function () {
      const contactsComputed = customerSelected.map((customer, _) => {
        if (
          contactIDRef.current != customer.ContactID &&
          customer.ContactID != null
        ) {
          contactIDRef.current = customer.ContactID;

          return (
            <details
              className="cursor-pointer border-b"
              key={`${customer.ContactID}_${customer.ContactName}`}
            >
              <summary className="flex gap-2 border-b pb-1">
                <input type="checkbox" name="" id="" />
                <span>{customer.ContactName}</span>
              </summary>

              <div className="py-2 grid">
                <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-2">
                  <div className="text-[#888] text-sm">Contact Name</div>
                  <div className="text-right flex gap-2 justify-end">
                    <span className="break-all">{customer.ContactName}</span>
                    <img
                      src="/svgs/pencil.icon.svg"
                      alt="Pencil Icon"
                      onClick={() =>
                        setEditingContactIDValue({
                          index: _,
                          AddressID: customer.AddressID,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-2 justify-between relative">
                  <div className="w-full">
                    <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-2">
                      <div className="text-[#888] text-sm">
                        Contact Phone No.
                      </div>
                      <div className="text-right">
                        +{customer.ContactPhonePrefix} {customer.ContactPhone}
                      </div>
                    </div>
                    <div
                      className="absolute right-0"
                      style={{
                        top: 16,
                      }}
                    >
                      <img
                        src="/images/addressLink.png"
                        width={24}
                        height={34}
                        alt="Address Link"
                        className="object-contain addressLink"
                      />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-2">
                      <div className="text-[#888] text-sm">Contact Address</div>
                      <div className="text-right">
                        {customer.CompanyStreetAddress}
                      </div>
                    </div>
                  </div>
                  <div className="w-5"></div>
                </div>
              </div>
            </details>
          );
        }
      });

      setContacts(contactsComputed);
    },
    [customerSelected]
  );

  return (
    <fieldset className="border p-4 pt-2 rounded max-h-[290px] border-gray-300 overflow-y-hidden">
      <legend>
        <div className="px-2">List of Contacts</div>
      </legend>
      <div className="bg-white rounded pt-3 p-4 h-full shadow-sm grid grid-rows-[1fr_auto] overflow-y-scroll overflow-x-hidden">
        <div className="h-full flex gap-2 flex-col">
          {contacts.map((contact) => contact)}
        </div>

        <div className="flex justify-end h-max mt-2">
          <button
            onClick={addContact}
            className="bg-blue-200 p-1 rounded px-2.5"
          >
            +
          </button>
        </div>
      </div>
    </fieldset>
  );
}
