import React, { useState } from "react";
import PermissionCRUD from "../components/PermissionCRUD";
export default function AuditLog() {
  const records = [
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
    {
      ip_address: "Albert Pitt",
      date_time: "2012-10-01 10:00:00",
      screen_time: "Dashboard",
      username: "John Doe",
      operation: "Read",
      key_value: "ID 1",
    },
  ];
  return (
    <div className="p-4">
      <div className="">
        <div className="rounded-xl p-4 bg-white">
          <div className="flex flex-wrap gap-4">
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
          <div className="py-10">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="py-2 text-left border-t border-t-gray-300 border-b border-b-gray-300 ">
                    <label className="custom_checkbox">
                      <input className="group" type="checkbox" />
                      <span className="checkmark mt-1"></span>
                    </label>
                  </th>
                  <th className="py-2 border-t border-t-gray-300 border-b border-b-gray-300  ">
                    <div className="flex">
                      <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                        IP Address
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
                  <th className="py-2 border-t border-t-gray-300 border-b border-b-gray-300  ">
                    <div className="flex">
                      <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                        Date and Time
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
                  <th className="py-2 border-t border-t-gray-300 border-b border-b-gray-300  ">
                    <div className="flex">
                      <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                        Screen Time
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
                  <th className="py-2 border-t border-t-gray-300 border-b border-b-gray-300  ">
                    <div className="flex">
                      <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                        Username
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
                  <th className="py-2 border-t border-t-gray-300 border-b border-b-gray-300  ">
                    <div className="flex">
                      <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                        Operation
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
                  <th className="py-2 border-t border-t-gray-300 border-b border-b-gray-300  ">
                    <div className="flex">
                      <span className="text-[14px] text-[#2c2d33] font-normal pe-3">
                        Key Value
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
                      <td className="py-2">
                        <label className="custom_checkbox">
                          <input className="group" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td className="py-2 text-[14px] text-[#6e7079]">
                        <div className="flex items-center">
                          <span> {record.ip_address}</span>
                        </div>
                      </td>
                      <td className="py-2 text-[14px] text-[#6e7079]">
                        <div className="flex items-center">
                          <span> {record.date_time}</span>
                        </div>
                      </td>
                      <td className="py-2 text-[14px] text-[#6e7079]">
                        <div className="flex items-center">
                          <span> {record.screen_time}</span>
                        </div>
                      </td>
                      <td className="py-2 text-[14px] text-[#6e7079]">
                        <div className="flex items-center">
                          <span> {record.username}</span>
                        </div>
                      </td>
                      <td className="py-2 text-[14px] text-[#6e7079]">
                        <div className="flex items-center">
                          <span> {record.operation}</span>
                        </div>
                      </td>
                      <td className="py-2 text-[14px] text-[#6e7079]">
                        <div className="flex items-center">
                          <span> {record.key_value}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
