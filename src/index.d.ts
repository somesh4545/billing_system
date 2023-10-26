export interface Company {
  CompanyID: number
  CompanyName: string
  CompanyEmployeeCount: number
  addresses: Address[]
  contacts: Contact[]
}

export interface Address {
  AddressID: number
  CompanyID: number
  CompanyStreetAddress: string
  CompanyCity: string
  CompanyStateCode: string
  CompanyZipCode: string
  CompanyAddressPrimary: number
  CompanyAddressHQ: number
}

export interface Contact {
  ContactID: number
  AddressID: number
  CompanyID: number
  ContactName: string
  ContactEmail: string
  ContactPhonePrefix: string
  ContactPhone: number
}
