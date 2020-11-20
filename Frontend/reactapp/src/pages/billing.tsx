import PaymentDetails from '../view/Payments/paymentDetails'

export default function billing() {

    var params:string = ''

    try {
        if (window !== undefined) {
            const urlParams = new URLSearchParams(window.location.search);
            params = urlParams.get('building') as string;
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
            <PaymentDetails itemID={params}/>
        </div>
    )
}