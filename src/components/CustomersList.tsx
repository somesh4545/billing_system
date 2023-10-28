import { Company } from "..";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closePanel,
  setCustomerDetailsPanelOpen,
  setCustomerSelectedIndex,
  setLoadedCustomers,
  setSelectedCustomer,
} from "../app/customer.slice";

export default function CustomersList() {
  const dispatch = useDispatch();

  // @ts-ignore
  const apiBaseURL = import.meta.env.VITE_API_BASEURL;

  const [customers, setCustomers] = useState<Company[]>([]);
  const {
    isPanelOpen,
    wasRecordAdded,
    isCustomerDetailsPanelOpen,
    searchValue,
    customerSelectedIndex,
    loadedCustomers,
  } = useSelector((state: any) => state.customers);

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
      dispatch(setLoadedCustomers(companies));

      dispatch(setSelectedCustomer(companies[customerSelectedIndex]));
    }
  };

  const openCustomerDetails = (customer, _) => {
    dispatch(setCustomerSelectedIndex(_));
    dispatch(setSelectedCustomer(customer));
    dispatch(setCustomerDetailsPanelOpen(true));
  };

  const loadDefaultView = () => {
    dispatch(setSelectedCustomer(null));
    dispatch(setCustomerDetailsPanelOpen(false));
    dispatch(closePanel());
  };

  const searchMacro = (term: string | number, search) => {
    if (term == null) return false;

    return term.toString().toLowerCase().search(search) > -1;
  };

  const filterCustomers = (
    customers: Company[],
    searchExpression
  ): Company[] => {
    return customers.filter((company) => {
      if (searchMacro(company.CompanyName, searchExpression)) {
        return true;
      }

      if (company.contacts.length > 0) {
        if (searchMacro(company.contacts[0].ContactEmail, searchExpression)) {
          return true;
        }

        if (searchMacro(company.contacts[0].ContactName, searchExpression)) {
          return true;
        }

        if (searchMacro(company.contacts[0].ContactPhone, searchExpression)) {
          return true;
        }
      }

      if (company.addresses.length > 0) {
        if (searchMacro(company.addresses[0].CompanyCity, searchExpression)) {
          return true;
        }

        if (
          searchMacro(
            company.addresses[0].CompanyStreetAddress,
            searchExpression
          )
        ) {
          return true;
        }

        if (
          searchMacro(company.addresses[0].CompanyZipCode, searchExpression)
        ) {
          return true;
        }
      }

      return false;
    });
  };

  useEffect(
    function () {
      getCustomers();
    },
    [wasRecordAdded]
  );

  useEffect(
    function () {
      if (!searchValue) {
        setCustomers(loadedCustomers);
        return;
      }

      const searchExpression = new RegExp(searchValue.toLowerCase(), "gm");

      setCustomers(filterCustomers(loadedCustomers, searchExpression));
    },
    [searchValue]
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
                <td className="no-b-top">Status</td>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody className="text-[#666]">
          {customers.map((customer, _) => (
            <tr
              className="cursor-pointer"
              key={customer.CompanyID}
              onClick={(e) => {
                // @ts-ignore
                if (!e.target.classList.contains("preventDefault")) {
                  openCustomerDetails(customer, _);
                }
              }}
            >
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
                          onClick={() => openCustomerDetails(customer, _)}
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
                          onClick={() => openCustomerDetails(customer, _)}
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
                    className="cusor-pointer border-b border-dotted border-[#aaa] preventDefault"
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
