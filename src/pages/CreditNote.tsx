import React, { useState } from "react";
import Pagination from "../components/Pagination";
export default function CreditNote() {
  const records = [
    {
      companyName: "Albert Pitt",
      credit_amount: 43564,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 2120,
    },
    {
      companyName: "Emma Timberland",
      credit_amount: 5884,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 4123,
    },
    {
      companyName: "Jannet Ali",
      credit_amount: 6577,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 5438,
    },
    {
      companyName: "Tim Washington",
      credit_amount: 5657,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 78654,
    },
    {
      companyName: "Dwayne Dornan",
      credit_amount: 546,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 7248,
    },
    {
      companyName: "Lilly Jackson",
      credit_amount: 4567,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 5376,
    },
    {
      companyName: "John Stone",
      credit_amount: 43646,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 7585,
    },
    {
      companyName: "Roman D jr.",
      credit_amount: 3636,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 75272,
    },
    {
      companyName: "Tony Montano",
      credit_amount: 3774,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 7427,
    },
    {
      companyName: "Charlie DiCaprio",
      credit_amount: 45645,
      credit_date: "01/12/23",
      invoice_reference: 6464,
      payment_receipt_reference: 27457,
    },
  ];

  const handleAddService = () => {
    const service_header = document.getElementById("service_header");
    service_header?.classList.add("hidden");
    const table_wrapper = document.getElementById("table_wrapper");
    const form_wrapper = document.getElementById("form_wrapper");
    table_wrapper?.classList.replace("w-full", "w-1/2");
    form_wrapper?.classList.replace("hidden", "w-1/2");
  };

  const handleCancelForm = () => {
    const service_header = document.getElementById("service_header");
    service_header?.classList.remove("hidden");
    const table_wrapper = document.getElementById("table_wrapper");
    const form_wrapper = document.getElementById("form_wrapper");
    table_wrapper?.classList.replace("w-1/2", "w-full");
    form_wrapper?.classList.replace("w-1/2", "hidden");
  };
  return (
    <>
      <div className="p-4">
        <div id="service_header" className="flex justify-end items-center py-4">
          <button
            className="bg-[#267dff] py-2 px-4 rounded-[12px] text-white"
            onClick={handleAddService}
          >
            + Add a New Credit note
          </button>
        </div>

        <div className="flex gap-6">
          <div id="table_wrapper" className="w-full bg-white rounded-xl p-4">
            <div className="flex flex-wrap gap-[10px]">
              <div className="flex justify-between items-center relative border border-[#cfd3d4] rounded w-[165px] h-[29px] px-1">
                <img
                  width={15}
                  height={16}
                  alt="Search Icon"
                  src="/svgs/search.icon.svg"
                  className="absolute top-1/4 left-2"
                />
                <input
                  className="w-[120px] ms-auto focus-visible:outline-none text-[12px] h-5 me-1"
                  type="text"
                  placeholder="Search"
                />
              </div>

              <div className="flex justify-between items-center relative border border-[#cfd3d4] w-[75px] rounded-[5px] h-[29px] px-2">
                <img
                  width={15}
                  height={16}
                  alt="Search Icon"
                  src="/svgs/filter.icon.svg"
                  className=""
                />
                <span className="focus-visible:outline-none text-[11px] me-1">
                  Filter
                </span>
              </div>

              <div className="flex justify-between items-center relative border border-[#cfd3d4] rounded-[5px] w-[165px] px-2 h-[29px]">
                <input
                  type="date"
                  id="calendar"
                  name="calendar"
                  className="flex-row-reverse gap-3 items-center focus-visible:outline-none text-[11px] me-1"
                />
                <span className="focus-visible:outline-none text-[11px] me-1">
                  Filter
                </span>
              </div>

              <div className="flex justify-between items-center relative border border-[#cfd3d4] w-[75px] rounded-[5px] h-[29px] px-2">
                <img
                  width={15}
                  height={16}
                  alt="Search Icon"
                  src="/svgs/share.icon.svg"
                  className=""
                />
                <span className="focus-visible:outline-none text-[11px] me-1">
                  Share
                </span>
              </div>

              <div className="relative group">
                <div className="flex justify-between items-center border border-[#cfd3d4] rounded-[5px] h-[29px] px-2">
                  <div className="text-[11px] me-5">Bulk Action</div>
                  <img
                    width={15}
                    height={16}
                    alt="Filter Icon"
                    src="/svgs/action.icon.svg"
                    className="img"
                  />
                </div>

                <div className="hidden group-hover:block absolute -left-10 w-[191px] bg-white text-[#53545c] border border-[#bec0ca] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-[5px] z-10">
                  <ul>
                    <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                      <input type="checkbox" id="allService" className="me-2" />
                      <label htmlFor="allService" className="text-[12px]">
                        Select all
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-1 text-left">
                      <label className="custom_checkbox">
                        <input className="group" type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </th>
                    <th className="py-1">
                      <div className="flex">
                        <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                          Company Name
                        </span>
                        <img
                          width={15}
                          height={16}
                          alt="Search Icon"
                          src="/svgs/sortBy.icon.svg"
                          className=""
                        />
                      </div>
                    </th>
                    <th className="py-1">
                      <div className="flex">
                        <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                          Credit Amount
                        </span>
                        <img
                          width={15}
                          height={16}
                          alt="Search Icon"
                          src="/svgs/sortBy.icon.svg"
                          className=""
                        />
                      </div>
                    </th>
                    <th className="py-1">
                      <div className="flex">
                        <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                          Credit Date
                        </span>
                        <img
                          width={15}
                          height={16}
                          alt="Search Icon"
                          src="/svgs/sortBy.icon.svg"
                          className=""
                        />
                      </div>
                    </th>
                    <th className="invoice_datetime py-1">
                      <div className="flex">
                        <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                          Invoice Reference
                        </span>
                        <img
                          width={15}
                          height={16}
                          alt="Search Icon"
                          src="/svgs/sortBy.icon.svg"
                          className=""
                        />
                      </div>
                    </th>
                    <th className="py-1">
                      <div className="flex">
                        <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                          Payment receipt Reference
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, i) => {
                    return (
                      <tr key={i}>
                        <td className="py-3">
                          <label className="custom_checkbox">
                            <input className="group" type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="py-3 text-[14px] text-[#6e7079]">
                          {record.companyName}
                        </td>

                        <td className="py-3 text-[14px] text-[#6e7079]">
                          <div className="flex ">
                            <div className="w-14">{record.credit_amount}</div>
                          </div>
                        </td>
                        <td className="py-3 text-[14px] text-[#6e7079]">
                          <div className="flex">
                            <div className="w-20">{record.credit_date}</div>
                          </div>
                        </td>
                        <td className="py-3 text-[14px] text-[#6e7079]">
                          <div className="flex">
                            <span className="w-14">
                              {record.invoice_reference}
                            </span>
                            <span className="underline">more</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex">
                            <span className="w-14 text-[14px] text-[#6e7079]">
                              {record.payment_receipt_reference}
                            </span>
                            <span className="underline text-[14px] text-[#6e7079]">
                              more
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="w-full">
                <hr className="mb-4"/>
                <Pagination />
              </div>
             
            </div>
          </div>

          <div id="form_wrapper" className="hidden w-1/2 bg-white rounded-xl">
            <div className="p-4">
              <div className="mb-5">
                <h4 className="text-[20px] text-black font-medium">
                  Add a New Credit Note
                </h4>
              </div>

              <div className="space-y-4 mb-2">
                <input
                  className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none"
                  type="text"
                  placeholder="Company name"
                />
                <input
                  className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none"
                  type="text"
                  placeholder="Credit amount"
                />
                <div className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg  mb-4">
                  <input
                    type="date"
                    id="calendar"
                    className="bg-[#eff1f999] placeholder:text-[#434343] focus-visible:outline-none "
                    name="calendar"
                  />
                </div>

                <select className="bg-[#eff1f999] text-[#434343] rounded-lg focus:outline-none w-full p-3">
                  <option selected>Invoice reference</option>
                  <option value="">reference 1</option>
                  <option value="">reference 2</option>
                  <option value="">reference 3</option>
                  <option value="">reference 4</option>
                </select>

                <input
                  className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none"
                  type="text"
                  placeholder="Payment Receipt Reference"
                />
              </div>
            </div>

            <div className="flex justify-between px-6 py-5">
              <button
                className="border border-[#000] rounded-[10px] text-[#434343] text-[15px] px-8 py-3"
                onClick={handleCancelForm}
              >
                Cancel
              </button>
              <button className="border border-[#000] rounded-[10px] text-[#fff] bg-[#267cff] text-[15px] px-10 py-3">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
