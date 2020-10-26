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
  bldg: string,
  number: number
  type: string
  percentageCapacity: string
}