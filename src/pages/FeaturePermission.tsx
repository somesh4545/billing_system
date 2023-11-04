import React, { useState } from "react";
import PermissionCRUD from "../components/PermissionCRUD";
export default function FeaturePermission() {
  const records = [
    {
      userName: "Albert Pitt",
    },
    {
      userName: "Emma Timberland",
    },
    {
      userName: "Jannet Ali",
    },
    {
      userName: "Tim Washington",
    },
    {
      userName: "Dwayne Dornan",
    },
    {
      userName: "Lilly Jackson",
    },
    {
      userName: "John Stone",
    },
    {
      userName: "Roman D jr.",
    },
    {
      userName: "Tony Montano",
    },
    {
      userName: "Charlie DiCaprio",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex gap-7">
        <div className="w-1/3 rounded-xl p-4 bg-white">
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
                        User
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
                        <div className="flex justify-between items-center">
                          <span> {record.userName}</span>
                          <img
                            width={20}
                            height={20}
                            alt="Search Icon"
                            src="/svgs/edit.icon.svg"
                            className=""
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-2/3">
          <div className="rounded-t-lg rounded-r-lg pt-4 px-4 bg-white">
            <div className="flex justify-between mb-5">
              <span className="text-[14px] text-[#6e7079]">Vr Logistics</span>
              <img
                width={20}
                height={20}
                alt="Search Icon"
                src="/svgs/edit.icon.svg"
                className=""
              />
            </div>
            <div className="py-3 px-8 border-t border-t-gray-300 border-b border-b-gray-300 text-[14px] text-[#2c2d33]">
              Permissions
            </div>
          </div>
          <div className="bg-white pb-8 divide-y">
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Customer"
                crud={true}
                more={false}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Service"
                crud={true}
                more={false}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Invoice"
                crud={true}
                more={false}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Credit Note"
                crud={true}
                more={false}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Audit log"
                crud={true}
                more={false}
              />
            </div>
            <div className="py-2 px-12 ">Reports</div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Monthly recurring revenue"
                crud={false}
                more={true}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Monthly new billing"
                crud={false}
                more={true}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Average billing per customer"
                crud={false}
                more={true}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Upcoming billing"
                crud={false}
                more={true}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="New accounts"
                crud={false}
                more={true}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Deactivated accounts"
                crud={false}
                more={true}
              />
            </div>
            <div className="py-2 px-12 ">
              <PermissionCRUD
                permissionName="Aging report or delayed payment"
                crud={false}
                more={true}
              />
            </div>
          </div>
          <div className="flex justify-between px-6 py-5 bg-white rounded-b-lg rounded-l-lg pb-8">
            <button className="border border-[#000] rounded-[10px] text-[#434343] text-[15px] px-8 py-3">
              Cancel
            </button>
            <button className="border border-[#000] rounded-[10px] text-[#fff] bg-[#267cff] text-[15px] px-10 py-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
