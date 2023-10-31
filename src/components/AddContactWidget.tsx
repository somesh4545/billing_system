import React, { useEffect, useRef, useState } from "react";
import dialcodes from "../assets/dialcodes.json";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  closePanel,
  finishedAddingContactOrAddress,
  updateWasRecordAdded,
} from "../app/customer.slice";

export default function AddContact() {
  const dispatch = useDispatch();

  const [editingCustomer, setEditingCustomer] = useState<any>({});

  const { customerSelected, editingContactID } = useSelector(
    (state: any) => state.customers
  );

  const form = useRef<HTMLFormElement>(null);
  const zipCodeError = useRef<HTMLParagraphElement>(null);
  // @ts-ignore
  const apiBaseURL = import.meta.env.VITE_API_BASEURL;

  const addContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editingCustomer) {
      alert("Please choose the Linking Address!")
      return;
    }

    const formData = new FormData();

    formData.append("addressID", editingCustomer?.AddressID);
    formData.append("companyID", editingCustomer?.CompanyID);

    formData.append("contactName", form.current?.contactName.value);
    formData.append("contactEmail", form.current?.contactEmail.value);
    formData.append(
      "contactPhonePrefix",
      form.current?.contactPhonePrefix.value
    );
    formData.append("contactPhone", form.current?.contactPhone.value);

    axios({
      method: "POST",
      data: formData,
      url: `${apiBaseURL}/api/customers/addContact`,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(updateWasRecordAdded(Math.random() * 10e6));
        dispatch(finishedAddingContactOrAddress());
      })
      .catch(function (response) {
        //handle error
        dispatch(finishedAddingContactOrAddress());
        dispatch(closePanel());
      });
  };

  useEffect(function () {
    setEditingCustomer(customerSelected[editingContactID?.index]);
  }, [editingContactID]);

  return (
    <div className="bg-blue-50 p-4 rounded-sm">
      <h2>Add Another Details</h2>

      <form
        ref={form}
        method="POST"
        onSubmit={addContact}
        className="mt-6 flex flex-col gap-3"
      >
        <div className="grid gap-1">
          <label className="text-[#888]" htmlFor="companyName">
            Add company info
          </label>
          <div className="w-full grid grid-cols-2 gap-2">
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              defaultValue={editingCustomer?.CompanyName}
              tabIndex={1}
              disabled
              name="companyName"
              placeholder="Name"
            />
            <input
              required
              className="p-2 rounded-sm border"
              type="number"
              disabled
              tabIndex={2}
              defaultValue={editingCustomer?.CompanyEmployeeCount}
              name="companyEmployeeCount"
              placeholder="No of Employees"
            />
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-[#888]" htmlFor="companyName">
            Contact Information
          </label>
          <div className="grid gap-2">
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              tabIndex={3}
              name="contactName"
              placeholder="Contact Name"
            />
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              tabIndex={3}
              name="contactEmail"
              placeholder="Contact Email"
            />
            <div className="w-full grid grid-cols-[auto_1fr] gap-2">
              <div className="pr-2 bg-white w-full border rounded-sm">
                <select
                  tabIndex={5}
                  name="contactPhonePrefix"
                  className="font-mono w-full p-2.5 cursor-pointer"
                >
                  <option value={"1"}>US(+1)</option>
                  {dialcodes
                    .sort((a, b) => {
                      if (a.code < b.code) return -1;
                      if (a.code > b.code) return 1;
                      return 0;
                    })
                    .map((code) =>
                      code.code === "US" ? null : (
                        <option
                          key={code.code}
                          value={code.dial_code.replace("+", "")}
                        >
                          {code.code}({code.dial_code})
                        </option>
                      )
                    )}
                </select>
              </div>
              <input
                required
                className="p-2 rounded-sm border"
                type="number"
                tabIndex={6}
                name="contactPhone"
                placeholder="1234567890"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-1">
          <label
            className="text-[#888] flex justify-between"
            htmlFor="companyName"
          >
            <div>Add Address</div>
            <div className="flex justify-center gap-3 text-xs">
              <div className="flex items-center gap-0.5">
                <input
                  type="checkbox"
                  disabled
                  defaultChecked={
                    editingCustomer?.CompanyAddressPrimary == "on"
                  }
                  name="companyAddressPrimary"
                  id=""
                />
                <span>Primary</span>
              </div>
              <div className="flex items-center gap-0.5">
                <input
                  type="checkbox"
                  name="companyAddressHQ"
                  defaultChecked={editingCustomer?.CompanyAddressHQ == "on"}
                  id=""
                />
                <span>HQ</span>
              </div>
            </div>
          </label>
          <div className="grid gap-2">
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              disabled
              tabIndex={7}
              name="companyStreetAddress"
              placeholder="Street Name"
              defaultValue={editingCustomer?.CompanyStreetAddress}
            />
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              tabIndex={8}
              disabled
              name="companyCity"
              defaultValue={editingCustomer?.CompanyCity}
              placeholder="City"
            />
            <div className="w-full">
              <input
                required
                className="p-2 rounded-sm border w-full"
                type="text"
                defaultValue={editingCustomer?.CompanyZipCode}
                tabIndex={9}
                disabled
                name="companyZipCode"
                placeholder="ZIP Code"
              />
              <p className="text-xs text-rose-800" ref={zipCodeError}></p>
            </div>
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              tabIndex={10}
              disabled
              name="companyStateCode"
              placeholder="State – 03"
              defaultValue={editingCustomer?.CompanyStateCode}
            />
          </div>
        </div>

        <div className="flex justify-between pt-8">
          <button
            className="bg-rose-100 py-2 px-4 rounded cursor-pointer hover:bg-rose-200"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closePanel());
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-200 py-2 px-4 rounded cursor-pointer hover:bg-blue-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
