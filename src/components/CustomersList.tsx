import { Company } from "..";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CustomersList() {
  // @ts-ignore
  const apiBaseURL = import.meta.env.VITE_API_BASEURL;

  const [customers, setCustomers] = useState<Company[]>([]);

  const getCustomers = async function () {
    const request = axios.get(`${apiBaseURL}/api/customers/list`);
    const { data } = await request;

    setCustomers(data?.companies);
  };

  useEffect(function () {
    getCustomers();
  }, []);

  return (
    <table className="w-full text-sm customer-list">
      <thead>
        <tr>
          <td>
            <div className="dead-center">
              <input type="checkbox" />
            </div>
          </td>
          <td>Company Name</td>
          <td>No. of Employees</td>
          <td>Contact Name</td>
          <td>Phone nos.</td>
          <td>Addresses</td>
          <td>Status</td>
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
            <td>
              {customer.CompanyEmployeeCount}{" "}
              {customer.CompanyEmployeeCount < 2 ? "Worker" : "Workers"}
            </td>
            <td>
              {customer.contacts.length > 0 && customer.contacts[0].ContactName}
            </td>
            <td>
              {"+"}
              {customer.contacts.length > 0 &&
                customer.contacts[0].ContactPhonePrefix}{" "}
              {customer.contacts.length > 0 &&
                customer.contacts[0].ContactPhone}
            </td>
            <td>
              {customer.addresses.length > 0 &&
                customer.addresses[0].CompanyStreetAddress}
            </td>
            <td>
              <button>Active</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
