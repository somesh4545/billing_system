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

export default function CustomersList({
  setRecords,
  lastRecord,
  setLastRecord,
  setRecordsCursor,
}) {
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
    const request = axios.get(
      `${apiBaseURL}/api/customers/list?lastRecord=${lastRecord}`
    );
    const { data } = await request;

    if (data?.status == true) {
      const companies: any = {};
      let currentID: number | null = null;

      setRecords(data.count);
      setLastRecord(data.lastRecord.LinkerID);

      data.results.map((result: Company) => {
        if (result.CompanyID != currentID) currentID = result.CompanyID;

        if (result.CompanyID == currentID) {
          if (companies[currentID] == undefined) {
            companies[currentID] = [result];
          } else {
            companies[currentID].push(result);
          }
        }
      });

      const companiesValue: any = Object.values(companies);

      const previousLinkerID: number | null = customers.length > 0
        ? customers[0][0].LinkerID - 1
        : null;

      setCustomers(companiesValue);
      dispatch(setLoadedCustomers(companiesValue));

      const currentLinkerID: number | null = companiesValue.length > 0
      ? companiesValue[0][0].LinkerID - 1
      : null;

      console.log(previousLinkerID, currentLinkerID);
      setRecordsCursor(previousLinkerID)

      if (customerSelectedIndex >= 0) {
        dispatch(setSelectedCustomer(companiesValue[customerSelectedIndex]));
      }
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

  const filterCustomers = (customers: any[], searchExpression): Company[] => {
    const updated_list = customers.map((companyArray) => {
      const arr = companyArray.filter((company) => {
        if (searchMacro(company.CompanyName, searchExpression)) {
          return true;
        }

        if (company) {
          if (searchMacro(company.ContactEmail, searchExpression)) {
            return true;
          }

          if (searchMacro(company.ContactName, searchExpression)) {
            return true;
          }

          if (searchMacro(company.ContactPhone, searchExpression)) {
            return true;
          }

          if (searchMacro(company.CompanyCity, searchExpression)) {
            return true;
          }

          if (searchMacro(company.CompanyStreetAddress, searchExpression)) {
            return true;
          }

          if (searchMacro(company.CompanyZipCode, searchExpression)) {
            return true;
          }
        }
      });

      return arr;
    });

    return updated_list.filter((items) => items.length > 0);
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

      if (/\W/.test(searchValue)) {
        alert("You can only search for alphanumeric values.");
      }

      const searchExpression = new RegExp(
        searchValue.replace(/\W/gm, "").toLowerCase(),
        "gm"
      );

      setCustomers(filterCustomers(loadedCustomers, searchExpression));
    },
    [searchValue]
  );

  return (
    <>
      <table
        aria-label={wasRecordAdded}
        className={
          "text-sm border h-max " +
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
          {customers.length < 1 && (
            <tr>
              <td></td>
              <td>No records found.</td>
            </tr>
          )}

          {customers.map((customer, _) => (
            <tr
              className="cursor-pointer"
              key={customer[0].CompanyID}
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
              <td>{customer[0].CompanyName}</td>
              {!isPanelOpen && !isCustomerDetailsPanelOpen ? (
                <>
                  <td>
                    {customer[0].CompanyEmployeeCount}{" "}
                    {customer[0].CompanyEmployeeCount < 2
                      ? "Worker"
                      : "Workers"}
                  </td>
                  <td>{customer[0].ContactName}</td>
                  <td>
                    <div className="flex justify-between">
                      <span>
                        {"+"}
                        {customer[0].ContactPhonePrefix}{" "}
                        {customer[0].ContactPhone}
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
                      <span>{customer[0].CompanyStreetAddress}</span>
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
                <>
                  <td>
                    <button
                      onClick={() => loadDefaultView()}
                      className="cusor-pointer border-b border-dotted border-[#aaa] preventDefault"
                    >
                      More
                    </button>
                  </td>
                  <td>
                    <button
                      disabled
                      onClick={() => loadDefaultView()}
                      className="cusor-pointer border-b border-dotted border-[#aaa] preventDefault"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
