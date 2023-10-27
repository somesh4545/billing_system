import { Company } from "..";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closePanel,
  setCustomerDetailsPanelOpen,
  setSelectedCustomer,
} from "../app/customer.slice";

export default function CustomersList() {
  const dispatch = useDispatch();

  // @ts-ignore
  const apiBaseURL = import.meta.env.VITE_API_BASEURL;

  const [customers, setCustomers] = useState<Company[]>([]);
  const { isPanelOpen, wasRecordAdded, isCustomerDetailsPanelOpen } =
    useSelector((state: any) => state.customers);

  const getCustomers = async function () {
    const request = axios.get(`${apiBaseURL}/api/customers/list`);
    const { data } = await request;

    if (data?.companies?.length > 0) {
      const companies = data.companies.sort((a: Company, b: Company) => {
        if (a.CompanyName < b.CompanyName) return -1;
        if (a.CompanyName > b.CompanyName) return 1;
        return 0;
      });

      setCustomers(companies);
    }
  };

  const openCustomerDetails = (customer) => {
    dispatch(setSelectedCustomer(customer));
    dispatch(setCustomerDetailsPanelOpen(true));
  };

  const loadDefaultView = () => {
    dispatch(setSelectedCustomer(null));
    dispatch(setCustomerDetailsPanelOpen(false));
    dispatch(closePanel());
  };

  useEffect(
    function () {
      getCustomers();
    },
    [wasRecordAdded]
  );

  return (
    <>
      <table
        className={
          "text-sm customer-list h-max " +
          (isPanelOpen || isCustomerDetailsPanelOpen ? "w-max" : "w-full")
        }
      >
        <thead>
          <tr>
            <td>
              <div className="dead-center">
                <input type="checkbox" />
              </div>
            </td>
            <td>Company Name</td>
            {!isPanelOpen && !isCustomerDetailsPanelOpen ? (
              <>
                <td>No. of Employees</td>
                <td>Contact Name</td>
                <td>Phone nos.</td>
                <td>Addresses</td>
                <td>Status</td>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody className="text-[#666]">
          {customers.map((customer) => (
            <tr key={customer.CompanyID}>
              <td>
                <div className="dead-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td>{customer.CompanyName}</td>
              {!isPanelOpen && !isCustomerDetailsPanelOpen ? (
                <>
                  <td>
                    {customer.CompanyEmployeeCount}{" "}
                    {customer.CompanyEmployeeCount < 2 ? "Worker" : "Workers"}
                  </td>
                  <td>
                    {customer?.contacts?.length > 0 &&
                      customer?.contacts[0].ContactName}
                  </td>
                  <td>
                    <div className="flex justify-between">
                      <span>
                        {"+"}
                        {customer?.contacts?.length > 0 &&
                          customer?.contacts[0].ContactPhonePrefix}{" "}
                        {customer?.contacts?.length > 0 &&
                          customer?.contacts[0].ContactPhone}
                      </span>
                      <div className="flex items-end">
                        <button
                          onClick={() => openCustomerDetails(customer)}
                          className="cursor-pointer border-b border-dotted border-[#888]"
                        >
                          More
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-between">
                      <span>
                        {customer?.addresses?.length > 0 &&
                          customer?.addresses[0].CompanyStreetAddress}
                      </span>
                      <div className="flex items-end">
                        <button
                          onClick={() => openCustomerDetails(customer)}
                          className="cursor-pointer border-b border-dotted border-[#888]"
                        >
                          More
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="bg-gray-700 text-gray-200 p-0.5 px-1 rounded text-xs">
                      Active
                    </button>
                  </td>
                </>
              ) : (
                <td>
                  <button
                    onClick={() => loadDefaultView()}
                    className="cusor-pointer border-b border-dotted border-[#aaa]"
                  >
                    More
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
