
const backEndUrl = import.meta.env.BACKEND_URL
console.log("BACKEND_URL - " + backEndUrl)
console.log("RAZORPAY_KEY - " + import.meta.env.RAZORPAY_KEY)
//const backEndUrl = 'https://api.dev.cardiotrack.link/clientuibackendsvc';//Dev
// const backEndUrl = 'https://v2prod.cardiotrack.link/clientuibackendsvc';//Prod


export default backEndUrl;