
const backEndUrl = import.meta.env.BACKEND_URL
console.log("BACKEND_URL - " + backEndUrl)
console.log("RAZORPAY_KEY - " + import.meta.env.RAZORPAY_KEY)
//const backEndUrl = 'https://api.dev.cardiotrack.link/clientuibackendsvc';//Dev
// const backEndUrl = 'https://v2prod.cardiotrack.link/clientuibackendsvc';//Prod

console.log(import.meta.env.MODE)
console.log(import.meta.env.BASE_URL)
console.log(import.meta.env.PROD)
export default backEndUrl;