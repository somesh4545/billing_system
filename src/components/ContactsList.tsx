import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddingAnotherAddress,
  setAddingAnotherContact,
  setEditingContactID,
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

  function setEditingContactIDValue(index) {
    dispatch(setEditingContactID(index));
  }

  return (
    <div className="bg-blue-50 p-4 rounded-sm grid gap-3">
      <fieldset className="border p-4 pt-2 rounded max-h-[290px] border-gray-300 overflow-y-hidden">
        <legend>
          <div className="px-2">List of Contacts</div>
        </legend>
        <div className="bg-white rounded pt-3 p-4 h-full shadow-sm grid grid-rows-[1fr_auto] overflow-scroll">
          <div className="h-full flex gap-2 flex-col">
            {customerSelected.contacts.map((contact, _) => (
              <details
                className="cursor-pointer border-b"
                key={`${contact.ContactID}_${contact.ContactName}`}
              >
                <summary className="flex gap-2 border-b pb-1">
                  <input type="checkbox" name="" id="" />
                  <span>{contact.ContactName}</span>
                </summary>

                <div className="py-2 grid">
                  <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-2">
                    <div className="text-[#888] text-sm">Contact Name</div>
                    <div className="text-right flex gap-2 justify-end">
                      <span className="break-all">{contact.ContactName}</span>
                      <img
                        src="/svgs/pencil.icon.svg"
                        alt="Pencil Icon"
                        onClick={() => setEditingContactIDValue(_)}
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
                          +{contact.ContactPhonePrefix} {contact.ContactPhone}
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
                        <div className="text-[#888] text-sm">
                          Contact Address
                        </div>
                        <div className="text-right">
                          {contact.CompanyStreetAddress}
                        </div>
                      </div>
                    </div>
                    <div className="w-5"></div>
                  </div>
                </div>
              </details>
            ))}
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
            <button
              onClick={addAddress}
              className="bg-blue-200 p-1 rounded px-2.5"
            >
              +
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
