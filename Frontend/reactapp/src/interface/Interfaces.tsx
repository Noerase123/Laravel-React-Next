export interface INavProps  {
    title: string
    children: React.ReactNode
}

export interface IBuilding {
  name: string
  type: string
  capacity: number
  vacancy: number
  occupancy: number
}

export interface IRoom {
  id: number
  bldg: string
  number: number
  type: string
  percentageCapacity: string
}

export interface ITenant {
  name: string
  email: string
  contactNum: string
  company: string
  occupation: string
  province: string
  city: string
  houseNum: string
  bed: string
  tenantType: string
  rentalRate: string
  moveIn: string
  moveOut: string
}

export interface ITenantInfo {
  firstName: string
  middleName: string
  lastName: string
  birthDate: string
  birthPlace: string
  city: string
  street: string
  gender: string
  email: string
  company: string
  salary: string
  companyEmail: string
  companySched: string
  emergencyName: string
  emergencyRelation: string
  emergencyContact: string
}

export interface ISubs {
  link: string
  title: string
}