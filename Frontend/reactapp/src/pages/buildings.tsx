import Buildings from '../view/Buildings/buildingsData'
import BuildingsDetails from '../view/Buildings/buildingsDetails'

export default function buildings() {

    var params:string = ''

    try {
        if (window !== undefined) {
            const urlParams = new URLSearchParams(window.location.search);
            params = urlParams.get('details') as string;
        } else {
            params = ''
        }
    } catch (e) {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }

    return (
        <div>
            <BuildingsDetails itemID={params}/>
        </div>
        // <Buildings/>
    )
}