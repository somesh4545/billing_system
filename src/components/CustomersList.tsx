import { Company } from "..";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePanel } from "../app/customer.slice";

export default function CustomersList() {
  const dispatch = useDispatch();

  // @ts-ignore
  const apiBaseURL = import.meta.env.VITE_API_BASEURL;

  const [customers, setCustomers] = useState<Company[]>([]);
  const { isPanelOpen, wasRecordAdded } = useSelector((state: any) => state.customers);

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

  useEffect(function () {
    getCustomers();
  }, [wasRecordAdded]);

  return (
    <>
      <table
        className={"text-sm customer-list h-max " + (isPanelOpen ? "w-max" : "w-full")}
      >
        <thead>
          <tr>
            <td>
              <div className="dead-center">
                <input type="checkbox" />
              </div>
            </td>
            <td>Company Name</td>
            {!isPanelOpen ? (
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
            <tr key={customer.CompanyID} onClick={console.log}>
              <td>
                <div className="dead-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td>{customer.CompanyName}</td>
              {!isPanelOpen ? (
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
                    {"+"}
                    {customer?.contacts?.length > 0 &&
                      customer?.contacts[0].ContactPhonePrefix}{" "}
                    {customer?.contacts?.length > 0 &&
                      customer?.contacts[0].ContactPhone}
                  </td>
                  <td>
                    {customer?.addresses?.length > 0 &&
                      customer?.addresses[0].CompanyStreetAddress}
                  </td>
                  <td>
                    <button className="bg-gray-700 text-gray-200 p-0.5 px-1 rounded text-xs">Active</button>
                  </td>
                </>
              ) : (
                <td>
                  <button onClick={() => dispatch(closePanel())} className="cusor-pointer border-b border-dotted border-[#aaa]">
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
