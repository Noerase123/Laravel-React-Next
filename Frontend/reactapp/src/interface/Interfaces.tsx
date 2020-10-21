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

export interface IColumn {
  id: number
  label: string
}