import React, { useState } from "react";
import Pagination from "../components/Pagination";
export default function Services() {
  const [checked, setChecked] = useState(false);
  const records = [
    {
      serviceName: "Service 1",
      unit: 56,
      price: 4432,
      status: "Active",
    },
    {
      serviceName: "Service 2",
      unit: 76,
      price: 5884,
      status: "Active",
    },
    {
      serviceName: "Service 3",
      unit: 46,
      price: 6577,
      status: "Active",
    },
    {
      serviceName: "Service 4",
      unit: 47,
      price: 5657,
      status: "Active",
    },
    {
      serviceName: "Service 5",
      unit: 37,
      price: 56546,
      status: "Active",
    },
    {
      serviceName: "Service 6",
      unit: 84,
      price: 56,
      status: "Active",
    },
    {
      serviceName: "Service 7",
      unit: 46,
      price: 545,
      status: "Active",
    },
    {
      serviceName: "Service 8",
      unit: 87,
      price: 6456,
      status: "Active",
    },
    {
      serviceName: "Service 9",
      unit: 66,
      price: 5446,
      status: "Active",
    },
    {
      serviceName: "Service 10",
      unit: 64,
      price: 546,
      status: "Active",
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

  const handleSelectedCustopmer = (e: any, id: number) => {
    if (
      document.getElementById("customer_" + id)?.classList.contains("selected")
    ) {
      document.getElementById("customer_" + id)?.classList.remove("selected");
    } else {
      document.getElementById("customer_" + id)?.classList.add("selected");
    }
  };

  const handleCancelForm = () => {
    const service_header = document.getElementById("service_header");
    service_header?.classList.remove("hidden");
    const table_wrapper = document.getElementById("table_wrapper");
    const form_wrapper = document.getElementById("form_wrapper");
    table_wrapper?.classList.replace("w-1/2", "w-full");
    form_wrapper?.classList.replace("w-1/2", "hidden");

    const specific_customer_wrapper = document.querySelector(
      ".specific_customer_wrapper"
    );
    // specific_customer_wrapper?.classList.add("hidden");
    const specific_customer_selected = document.querySelectorAll(
      ".specific_customer_wrapper .selected"
    );
    specific_customer_selected.forEach((element) => {
      element.classList.remove("selected");
    });

    const checkbox = document.getElementById(
      "specific_customer_checkbox"
    ) as HTMLInputElement | null;
    console.log("chcked", checked);

    if (checkbox != null) {
      checkbox.checked = false;
      setChecked(false);
      if (specific_customer_wrapper?.classList.contains("block")) {
        specific_customer_wrapper?.classList.remove("block");
        specific_customer_wrapper?.classList.add("hidden");
      }
    }
  };

  return (
    <div className="p-4">
      <div
        id="service_header"
        className="flex justify-between items-center py-4"
      >
        <span>Services Summary</span>
        <button
          className="bg-[#267dff] py-2 px-4 rounded-[12px] text-white"
          onClick={handleAddService}
        >
          + Add a New Service
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
                      Select all Services
                    </label>
                  </li>
                  <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                    <input type="checkbox" id="selectActive" className="me-2" />
                    <label htmlFor="selectActive" className="text-[12px]">
                      Select active Services
                    </label>
                  </li>
                  <li className="px-3 py-2 flex items-center cursor-pointer hover:bg-[#bec0ca]">
                    <input
                      type="checkbox"
                      id="selectInactive"
                      className="me-2"
                    />
                    <label htmlFor="selectInactive" className="text-[12px]">
                      Select inactive services
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
                        Unit
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
                        Price
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
                      <img
                        width={15}
                        height={16}
                        alt="Search Icon"
                        src="/svgs/sortBy.icon.svg"
                        className=""
                      />
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
                          <div className="w-10">{record.unit}</div>
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
                          <div className="w-20">${record.price}</div>
                          <img
                            width={15}
                            height={16}
                            alt="copy icon"
                            src="/svgs/copy.icon.svg"
                            className="u-copy-alt"
                          />
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="bg-[#424242] text-[12px] text-[#dddddd] rounded-lg px-[11px] py-1">
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

        <div
          id="form_wrapper"
          className="hidden w-1/2 bg-white rounded-xl p-10"
        >
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-[20px] text-black font-medium">Add</h4>
            <img
              width={32}
              height={32}
              alt="Search Icon"
              src="/svgs/closeBtn.icon.svg"
              className="cursor-pointer"
              onClick={handleCancelForm}
            />
          </div>

          <div className="text-base text-[#8b8d97] pb-3">Add Information</div>
          <div className="space-y-6">
            <input
              className="w-full bg-[#eff1f999] px-4 py-4 rounded-lg focus-visible:outline-none"
              type="text"
              placeholder="Service Name"
            />
            <input
              className="w-full bg-[#eff1f999] px-4 py-4 rounded-lg focus-visible:outline-none"
              type="text"
              placeholder="Unit"
            />
            <input
              className="w-full bg-[#eff1f999] px-4 py-4 rounded-lg focus-visible:outline-none"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="flex gap-5 mt-6">
            <span className="text-base text-[#8b8d97]">
              Specific to customer
            </span>
            <label className="custom_checkbox">
              <input
                id="specific_customer_checkbox"
                className="group specific_customer_checkbox"
                type="checkbox"
                onClick={() => {
                  checked ? setChecked(false) : setChecked(true);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="min-h-[300px]">
            <div
              className={`${
                checked ? "block" : "hidden "
              } specific_customer_wrapper space-y-5 mt-5`}
            >
              <span
                id="customer_1"
                onClick={(e) => handleSelectedCustopmer(e, 1)}
                className="block w-max cursor-pointer text-base text-[#8b8d97]"
              >
                Vr Logistics
              </span>
              <span
                id="customer_2"
                onClick={(e) => handleSelectedCustopmer(e, 2)}
                className="block w-max cursor-pointer text-base text-[#8b8d97]"
              >
                Tommy Exporters
              </span>
              <span
                id="customer_3"
                onClick={(e) => handleSelectedCustopmer(e, 3)}
                className="block w-max cursor-pointer text-base text-[#8b8d97]"
              >
                Denver Ports
              </span>
              <span
                id="customer_4"
                onClick={(e) => handleSelectedCustopmer(e, 4)}
                className="block w-max cursor-pointer text-base text-[#8b8d97]"
              >
                Tim Washington
              </span>
              <span
                id="customer_5"
                onClick={(e) => handleSelectedCustopmer(e, 5)}
                className="block w-max cursor-pointer text-base text-[#8b8d97]"
              >
                Washington Ltd.
              </span>
              <span
                id="customer_6"
                onClick={(e) => handleSelectedCustopmer(e, 6)}
                className="block w-max cursor-pointer text-base text-[#8b8d97]"
              >
                Dornan Pvt Ltd
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="border border-[#000] rounded-[10px] text-[#434343] text-[20px] px-12 py-3"
              onClick={handleCancelForm}
            >
              Cancel
            </button>
            <button className="border border-[#000] rounded-[10px] text-[#fff] bg-[#267cff] text-[20px] px-14 py-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
