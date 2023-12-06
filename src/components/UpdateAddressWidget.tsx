import React, { useEffect, useRef, useState } from "react";
import dialcodes from "../assets/dialcodes.json";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  closePanel,
  finishedAddingContactOrAddress,
  setAddingAnotherAddress,
  updateWasRecordAdded,
} from "../app/customer.slice";

export default function UpdateAddressWidget() {
  const dispatch = useDispatch();
  const {
    customerSelected,
    editingAddressID,
    addingAnotherAddress,
  } = useSelector((state: any) => state.customers);

  const [editingCustomer, setEditingCustomer] = useState<any>({});

  const [isAddressHQChecked, setIsAddressHQChecked] = useState(false);
  const [isPrimaryAddressChecked, setIsPrimaryAddressChecked] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const zipCodeError = useRef<HTMLParagraphElement>(null);
  // @ts-ignore
  const apiBaseURL = import.meta.env.VITE_API_BASEURL;

  const handleZipCodeChange = (e: any) => {
    const inputValue = e.target?.value;
    const element = zipCodeError.current as HTMLParagraphElement;

    // Is numberic
    if (
      /\d/gm.test(inputValue) &&
      (/-/gm.test(inputValue) || !/\D/.test(inputValue))
    ) {
      if (/-/gm.test(inputValue)) {
        inputValue.length != 10
          ? (element.innerHTML =
              "<div class='pt-1'>The ZIP code must be in the format 00000-0000.</div>")
          : (element.innerHTML = "");

        return;
      }

      inputValue.length != 5
        ? (element.innerHTML =
            "<div class='pt-1'>The ZIP code must be in the format 00000.</div>")
        : (element.innerHTML = "");

      return;
    }

    // Input is alphanumeric
    if (/\w/gm.test(inputValue)) {
      inputValue.length != 10
        ? (element.innerHTML =
            "<div class='pt-1'>The ZIP code must be alphanumeric and consist of exactly 10 characters.</div>")
        : (element.innerHTML = "");

      return;
    }

    element.innerHTML = "";
  };

  const UpdateAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("addressID", editingCustomer?.AddressID);

    formData.append(
      "companyStreetAddress",
      form.current?.companyStreetAddress?.value
    );
    formData.append("companyCity", form.current?.companyCity?.value);
    formData.append("companyStateCode", form.current?.companyStateCode?.value);
    formData.append("companyZipCode", form.current?.companyZipCode?.value);
    formData.append(
      "companyAddressPrimary",
      form.current?.companyAddressPrimary?.checked
    );
    formData.append(
      "companyAddressHQ",
      form.current?.companyAddressHQ?.checked
    );

    axios({
      method: "POST",
      data: formData,
      url: `${apiBaseURL}/api/customers/update`,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(updateWasRecordAdded(Math.random() * 10e6));
        dispatch(finishedAddingContactOrAddress());
        dispatch(setAddingAnotherAddress(false));
        dispatch(closePanel());
      })
      .catch(function (response) {
        //handle error
        alert(response.message);
        dispatch(finishedAddingContactOrAddress());
        dispatch(setAddingAnotherAddress(false));
        dispatch(closePanel());
      });
  };

  useEffect(
    function () {
      if (addingAnotherAddress) {
        setEditingCustomer({
          CompanyID: customerSelected[0]?.CompanyID,
          CompanyName: customerSelected[0]?.CompanyName,
          CompanyEmployeeCount: customerSelected[0]?.CompanyEmployeeCount,
        });
      } else
        setEditingCustomer(
          customerSelected[editingAddressID?.index ?? 0]
        );
    },
    [editingAddressID]
  );

  useEffect(
    function () {
      setIsAddressHQChecked(editingCustomer?.CompanyAddressHQ == "true");
      setIsPrimaryAddressChecked(
        editingCustomer?.CompanyAddressPrimary == "true"
      );
    },
    [editingCustomer]
  );

  const changeCheckboxValue = (value, checkbox) => {
    if (checkbox == "P") {
      setIsPrimaryAddressChecked(value);
    } else if (checkbox == "HQ") {
      setIsAddressHQChecked(value);
    }
  };

  return (
    <div className="bg-blue-50 p-4 rounded-sm">
      <h2>Update Address</h2>

      <form
        ref={form}
        method="POST"
        onSubmit={UpdateAddress}
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
              disabled
              name="contactName"
              defaultValue={editingCustomer?.ContactName}
              placeholder="Contact Name"
            />
            <input
              required
              className="p-2 rounded-sm border"
              disabled
              type="text"
              tabIndex={3}
              name="contactEmail"
              defaultValue={editingCustomer?.ContactEmail}
              placeholder="Contact Email"
            />
            <div className="w-full grid grid-cols-[auto_1fr] gap-2">
              <div className="pr-2 bg-white w-full border rounded-sm">
                <select
                  tabIndex={5}
                  disabled
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
                          defaultValue={editingCustomer?.ContactPhonePrefix}
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
                disabled
                name="contactPhone"
                defaultValue={editingCustomer?.ContactPhone}
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
            <div>Update Address</div>
            <div className="flex justify-center gap-3 text-xs">
              <div className="flex items-center gap-0.5">
                <input
                  type="checkbox"
                  checked={isPrimaryAddressChecked}
                  name="companyAddressPrimary"
                  onChange={(e) => changeCheckboxValue(e.target.checked, "P")}
                />
                <span>Primary</span>
              </div>
              <div className="flex items-center gap-0.5">
                <input
                  type="checkbox"
                  checked={isAddressHQChecked}
                  name="companyAddressHQ"
                  onChange={(e) => changeCheckboxValue(e.target.checked, "HQ")}
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
              tabIndex={7}
              name="companyStreetAddress"
              defaultValue={editingCustomer.CompanyStreetAddress}
              placeholder="Street Name"
            />
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              tabIndex={8}
              name="companyCity"
              defaultValue={editingCustomer.CompanyCity}
              placeholder="City"
            />
            <div className="w-full">
              <input
                required
                className="p-2 rounded-sm border w-full"
                type="text"
                tabIndex={9}
                name="companyZipCode"
                defaultValue={editingCustomer.CompanyZipCode}
                onChange={handleZipCodeChange}
                placeholder="ZIP Code"
              />
              <p className="text-xs text-rose-800" ref={zipCodeError}></p>
            </div>
            <input
              required
              className="p-2 rounded-sm border"
              type="text"
              tabIndex={10}
              defaultValue={editingCustomer.CompanyStateCode}
              name="companyStateCode"
              placeholder="State – 03"
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
