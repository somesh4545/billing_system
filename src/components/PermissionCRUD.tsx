import React from 'react'

export default function PermissionCRUD({permissionName , crud , more}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[14px] text-[#6e7079]"> {permissionName}</span>
      {crud && (
        <div className="flex space-x-8">
          <div className="flex items-center">
            <label className="custom_checkbox ">
              <input className="group " type="checkbox" />
              <span className="checkmark mt-1"></span>
            </label>
            <span className="text-[14px] text-[#6e7079]"> Read</span>
          </div>
          <div className="flex items-center">
            <label className="custom_checkbox ">
              <input className="group " type="checkbox" />
              <span className="checkmark mt-1"></span>
            </label>
            <span className="text-[14px] text-[#6e7079]"> Create</span>
          </div>
          <div className="flex items-center">
            <label className="custom_checkbox ">
              <input className="group " type="checkbox" />
              <span className="checkmark mt-1"></span>
            </label>
            <span className="text-[14px] text-[#6e7079]"> Update</span>
          </div>
          <div className="flex items-center">
            <label className="custom_checkbox ">
              <input className="group " type="checkbox" />
              <span className="checkmark mt-1"></span>
            </label>
            <span className="text-[14px] text-[#6e7079]"> Delete</span>
          </div>
        </div>
      )}

      {more && (
        <div className="flex items-center w-[55%]">
          <label className="custom_checkbox ">
            <input className="group " type="checkbox" />
            <span className="checkmark mt-1"></span>
          </label>
          <span className="text-[14px] text-[#267cff]"> More</span>
        </div>
      )}
    </div>
  );
}
