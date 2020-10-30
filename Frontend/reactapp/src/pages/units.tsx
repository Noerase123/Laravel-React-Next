import Unit from '../view/Units/UnitsData'
import UnitsDetails from '../view/Units/UnitsDetails'

export default function units() {
  
  const urlParams = new URLSearchParams(global.window.location.search)
  const params = urlParams.get('details') as string
  
  return (
    <div>
      {params === null ? (
        <Unit/>
      ) : (
          <UnitsDetails itemID={params}/>
      )}
    </div>
  )
}