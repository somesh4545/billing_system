export interface Company {
  CompanyID: number
  CompanyName: string
  CompanyEmployeeCount: number
  isVisible?: boolean
  AddressID: number
  CompanyStreetAddress: string
  CompanyCity: string
  CompanyStateCode: string
  CompanyZipCode: string
  CompanyAddressPrimary: number
  CompanyAddressHQ: number
  ContactID: number
  ContactName: string
  ContactEmail: string
  ContactPhonePrefix: string
  ContactPhone: number
}
