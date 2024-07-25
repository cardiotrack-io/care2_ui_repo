
const backEndUrl = import.meta.env.VITE_BACKEND_URL
console.log(backEndUrl)
//const backEndUrl = 'https://api.dev.cardiotrack.link/clientuibackendsvc';//Dev
// const backEndUrl = 'https://v2prod.cardiotrack.link/clientuibackendsvc';//Prod

console.log(import.meta.env.MODE)
console.log(import.meta.env.BASE_URL)
console.log(import.meta.env.PROD)
export default backEndUrl;