import UnitsDetails from '../view/Units/UnitsDetails'

export default function units() {
  var bldg: string = ''
  var id: string = ''
  var unit: string = ''

  try {
    const urlParams = new URLSearchParams(window.location.search)
    bldg = urlParams.get('building') as string
    unit = urlParams.get('unit') as string
    id = urlParams.get('v') as string

  } catch (e) {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
  }
  
  return (
    <div>
      <UnitsDetails
        id={id}
        building={bldg}
        unit={unit}
      />
    </div>
  )
}