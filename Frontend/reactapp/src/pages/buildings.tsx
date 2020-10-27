import Buildings from '../view/Buildings/buildingsData'
import BuildingsDetails from '../view/Buildings/buildingsDetails'

export default function buildings() {

    const urlParams = new URLSearchParams(global.window.location.search);
    const params = urlParams.get('details') as string;

    return (
        <div>
            {params === null ? (
                <Buildings/>
            ) : (
                <BuildingsDetails itemID={params}/>
            )}
        </div>
    )
}