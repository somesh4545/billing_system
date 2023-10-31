import React from "react";
import ContactFieldset from "./ContactFieldset";
import AddressFieldset from "./AddressFieldset";

export default function ContactsList() {
  return (
    <div className="bg-blue-50 p-4 rounded-sm grid gap-3">
      <ContactFieldset />
      <AddressFieldset />
    </div>
  );
}
