import React, { useRef } from "react";
import dialcodes from "../assets/dialcodes.json";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { closePanel, updateWasRecordAdded } from "../app/customer.slice";

export default function ContactsList() {
  const dispatch = useDispatch();

  const { customerSelected } = useSelector((state: any) => state.customers);

  return (
    <div className="bg-blue-50 p-4 rounded-sm grid gap-3">
      <fieldset className="border p-4 pt-2 rounded border-gray-300">
        <legend>List of Contacts</legend>
        <div className="bg-white rounded p-3 px-4 h-full shadow-sm">
          {customerSelected.contacts.map((contact, _) => (
            <details>
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
      </fieldset>

      <fieldset className="border p-4 pt-2 rounded border-gray-300">
        <legend>List of Addresses</legend>
        <div className="bg-white rounded p-3 px-4 h-full shadow-sm">
          {customerSelected.addresses.map((address, _) => (
            <details>
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
      </fieldset>
    </div>
  );
}
