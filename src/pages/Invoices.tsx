import React, { useState } from "react";
import Pagination from "../components/Pagination";

export default function Invoices() {
  const records = [
    {
      serviceName: "Albert Pitt",
      invoice_no: 56,
      invoice_value: 4432,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Sent",
    },
    {
      serviceName: "Emma Timberland",
      invoice_no: 76,
      invoice_value: 5884,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Sent",
    },
    {
      serviceName: "Jannet Ali",
      invoice_no: 46,
      invoice_value: 6577,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Sent",
    },
    {
      serviceName: "Tim Washington",
      invoice_no: 47,
      invoice_value: 5657,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Sent",
    },
    {
      serviceName: "Dwayne Dornan",
      invoice_no: 37,
      invoice_value: 56546,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Sent",
    },
    {
      serviceName: "Lilly Jackson",
      invoice_no: 84,
      invoice_value: 56,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Paid",
    },
    {
      serviceName: "John Stone",
      invoice_no: 46,
      invoice_value: 545,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Paid",
    },
    {
      serviceName: "Roman D jr.",
      invoice_no: 87,
      invoice_value: 6456,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Paid",
    },
    {
      serviceName: "Tony Montano",
      invoice_no: 66,
      invoice_value: 5446,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Overdue",
    },
    {
      serviceName: "Charlie DiCaprio",
      invoice_no: 65,
      invoice_value: 546,
      invoice_date_time: "12 Aug 2022 - 12:25 am",
      status: "Overdue",
    },
  ];

  const handleAddService = () => {
    const service_header = document.getElementById("service_header");
    service_header?.classList.add("hidden");
    const table_wrapper = document.getElementById("table_wrapper");
    const form_wrapper = document.getElementById("form_wrapper");
    const invoice_datetime =
      document.getElementsByClassName("invoice_datetime");
    table_wrapper?.classList.replace("w-full", "w-1/2");
    form_wrapper?.classList.replace("hidden", "w-1/2");

    const invoice_datetimeArray = Array.from(invoice_datetime);
    if (form_wrapper?.classList.contains("w-1/2")) {
      invoice_datetimeArray.forEach((element) => {
        element.classList.add("hidden");
      });
    }
  };

  const handleCancelForm = () => {
    const service_header = document.getElementById("service_header");
    service_header?.classList.remove("hidden");
    const table_wrapper = document.getElementById("table_wrapper");
    const form_wrapper = document.getElementById("form_wrapper");
    table_wrapper?.classList.replace("w-1/2", "w-full");
    form_wrapper?.classList.replace("w-1/2", "hidden");

    const invoice_datetime =
      document.getElementsByClassName("invoice_datetime");

    const invoice_datetimeArray = Array.from(invoice_datetime);
    if (form_wrapper?.classList.contains("hidden")) {
      invoice_datetimeArray.forEach((element) => {
        element.classList.remove("hidden");
      });
    }
  };
  return (
    <>
      <div className="p-4">
        <div
          id="service_header"
          className="flex justify-between items-center py-4"
        >
          <span>Summary</span>
          <button
            className="bg-[#267dff] py-2 px-4 rounded-[12px] text-white"
            onClick={handleAddService}
          >
            + Add a New Invoice
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
                          Service Name
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
                          Invoice no.
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
                          Invoice value
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
                          Invoice date & time
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
                          Status
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
                          {record.serviceName}
                        </td>

                        <td className="py-3 text-[14px] text-[#6e7079]">
                          <div className="flex ">
                            <div className="w-10">{record.invoice_no}</div>
                            <img
                              width={15}
                              height={16}
                              alt="copy icon"
                              src="/svgs/copy.icon.svg"
                              className="u-copy-alt"
                            />
                          </div>
                        </td>
                        <td className="py-3 text-[14px] text-[#6e7079]">
                          <div className="flex">
                            <div className="w-20">${record.invoice_value}</div>
                            <img
                              width={15}
                              height={16}
                              alt="copy icon"
                              src="/svgs/copy.icon.svg"
                              className="u-copy-alt"
                            />
                          </div>
                        </td>
                        <td className="invoice_datetime py-3">
                          <span className=" ">{record.invoice_date_time}</span>
                        </td>
                        <td className="py-3">
                          <span
                            className={`${
                              record.status == "Sent"
                                ? "bg-[#434343]"
                                : record.status == "Paid"
                                ? "bg-[#34ca00]"
                                : "bg-[#ff6b00]"
                            } text-[12px] text-[#fff] rounded-lg w-16 py-1 block text-center`}
                          >
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="w-full">
                <hr className="mb-4" />
                <Pagination />
              </div>
            </div>
          </div>

          <div id="form_wrapper" className="hidden w-1/2 bg-white rounded-xl">
            <div className="p-4">
              <div className="flex justify-between items-center  mb-5">
                <h4 className="text-[20px] text-black font-medium">
                  New Invoice No. ()
                </h4>
                <img
                  width={32}
                  height={32}
                  alt="Search Icon"
                  src="/svgs/closeBtn.icon.svg"
                  className="cursor-pointer"
                  onClick={handleCancelForm}
                />
              </div>

              <div className="flex justify-between">
                <div className="text-base text-[#000000] pb-2">Bill to</div>
                <div className="flex text-base text-[#000000] pb-2">
                  <label className="custom_checkbox">
                    <input className="group" type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  Monthly Recurring
                </div>
              </div>

              <div className="space-y-4 mb-2">
                <select className="bg-[#eff1f999] text-[#434343] rounded-lg focus:outline-none w-full p-3">
                  <option selected>Company name of email</option>
                  <option value="">Emma Timberland</option>
                  <option value="">Dwayne Dornan</option>
                  <option value="">John Stone</option>
                  <option value="">Roman D jr.</option>
                </select>
                <div className="text-base text-[#000000]">Item</div>
                <div className="flex justify-between gap-3">
                  <select className="bg-[#eff1f999] text-sm rounded-lg focus:outline-none text-[#434343] w-[40%] p-2 h-12">
                    <option selected>Item name</option>
                    <option value="">Item 1</option>
                    <option value="">Item 2</option>
                  </select>
                  <select className="bg-[#eff1f999] text-sm rounded-lg focus:outline-none text-[#434343] w-[20%] p-2 h-12">
                    <option selected>Quantity</option>
                    <option value="">10</option>
                    <option value="">20</option>
                  </select>
                  <input
                    className="bg-[#eff1f999] px-4 py-4 rounded-lg focus-visible:outline-none w-[20%] h-12"
                    type="text"
                    placeholder="Price"
                  />
                  <select className="bg-[#eff1f999] text-sm rounded-lg focus:outline-none w-[20%] p-2 h-12 text-[#434343]">
                    <option selected>Tax</option>
                    <option value="">25</option>
                    <option value="">35</option>
                  </select>
                </div>
                <input
                  className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none"
                  type="text"
                  placeholder="Add a description (optional)"
                />
                <input
                  className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none"
                  type="text"
                  placeholder="Price"
                />
              </div>

              <div className="flex justify-between">
                <div className="relative group">
                  <div className="px-2 text-[#267dff] cursor-pointer">
                    <div className="text-base me-5">Add item or service</div>
                  </div>

                  <div className="hidden group-hover:block absolute left-3 w-[160px] bg-white text-[#53545c] border border-[#bec0ca] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-[5px] z-10">
                    <ul>
                      <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                        <input type="checkbox" id="item1" className="me-2" />
                        <label htmlFor="item1" className="text-[12px]">
                          Item 1
                        </label>
                      </li>
                      <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                        <input type="checkbox" id="item2" className="me-2" />
                        <label htmlFor="item2" className="text-[12px]">
                          Item 2
                        </label>
                      </li>
                      <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                        <input type="checkbox" id="item3" className="me-2" />
                        <label htmlFor="item3" className="text-[12px]">
                          Item 3
                        </label>
                      </li>
                      <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                        <input type="checkbox" id="item4" className="me-2" />
                        <label htmlFor="item4" className="text-[12px]">
                          Item 4
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <span>Amount $ 0</span>
              </div>
            </div>
            <hr />
            <div className="px-6">
              <div className="text-base text-[#000000] py-3">
                More Invoice details
              </div>
              <input
                className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none mb-4"
                type="text"
                placeholder="invoice number"
              />
              <div className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg  mb-4">
                <input
                  type="date"
                  id="calendar"
                  className="bg-[#eff1f999] placeholder:text-[#434343] focus-visible:outline-none "
                  name="calendar"
                />
              </div>
              <input
                className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg focus-visible:outline-none mb-4"
                type="text"
                placeholder="invoice number"
              />
              <div className="w-full bg-[#eff1f999] placeholder:text-[#434343] px-4 py-3 rounded-lg mb-4">
                <input
                  type="date"
                  id="calendar"
                  className="bg-[#eff1f999] placeholder:text-[#434343] focus-visible:outline-none "
                  name="calendar"
                />
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Add</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between mb-2">
                <span>Other amount</span>
                <span>Add</span>
              </div>
              <div className="flex justify-between">
                <span>Total ( Tsx exc. )</span>
                <span>$0</span>
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
