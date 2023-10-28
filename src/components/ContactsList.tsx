import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddingAnotherAddress,
  setAddingAnotherContact,
} from "../app/customer.slice";

export default function ContactsList() {
  const dispatch = useDispatch();
  const { customerSelected } = useSelector((state: any) => state.customers);

  function addContact() {
    dispatch(setAddingAnotherContact(true));
  }

  function addAddress() {
    dispatch(setAddingAnotherAddress(true));
  }

  return (
    <div className="bg-blue-50 p-4 rounded-sm grid gap-3">
      <fieldset className="border p-4 pt-2 rounded border-gray-300">
        <legend>
          <div className="px-2">List of Contacts</div>
        </legend>
        <div className="bg-white rounded pt-3 p-4 max-h-[273.5px] h-full shadow-sm grid grid-rows-[1fr_auto]">
          <div className="h-full">
            {customerSelected.contacts.map((contact, _) => (
              <details key={`${contact.ContactID}_${contact.ContactName}`}>
                <summary>{contact.ContactName}</summary>

                <div className="grid pt-2">
                  <div className="flex justify-between pt-1">
                    <span className="text-[#888]">Contact Name</span>
                    <span>{contact.ContactName}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#888]">Contact Phone</span>
                    <span>
                      +{contact.ContactPhonePrefix} {contact.ContactPhone}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#888]">Contact Address</span>
                    <span>
                      {customerSelected.addresses[_]?.CompanyStreetAddress}
                    </span>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="flex justify-end h-max">
            <button onClick={addContact} className="bg-blue-200 p-2 rounded">
              Add Contact
            </button>
          </div>
        </div>
      </fieldset>

      <fieldset className="border p-4 pt-2 rounded border-gray-300">
        <legend>
          <div className="px-2">List of Addresses</div>
        </legend>
        <div className="bg-white rounded pt-3 p-4 max-h-[273.5px] h-full shadow-sm grid grid-rows-[1fr_auto]">
          <div className="h-full">
            {customerSelected.addresses.map((address, _) => (
              <details
                key={`${address.ContactID}_${address.CompanyStreetAddress}`}
              >
                <summary>{address.CompanyStreetAddress}</summary>

                <div className="grid pt-2">
                  <div className="flex justify-between pt-1">
                    <span className="text-[#888]">Street Name</span>
                    <span>{address.CompanyStreetAddress}</span>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="flex justify-end h-max">
            <button onClick={addAddress} className="bg-blue-200 p-2 rounded">
              Add Address
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
