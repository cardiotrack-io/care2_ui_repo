import backEndUrl from "./backEndURL"
const razorPay = {
    'create_order' : backEndUrl + '/care/payment/order',
    'validate_order' : backEndUrl + '/care/intg/register/order'
}


export default razorPay;