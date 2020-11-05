import Buildings from '../view/Buildings/buildingsData'
import BuildingsDetails from '../view/Buildings/buildingsDetails'

export default function buildings() {

    var params:string = ''

    if (window !== undefined) {
        const urlParams = new URLSearchParams(window.location.search);
        params = urlParams.get('details') as string;
    } else {
        params = ''
    }

    return (
        <div>
            {params === null ? (
                <Buildings/>
            ) : (
                <BuildingsDetails itemID={params}/>
            )}
        </div>
        // <Buildings/>
    )
}