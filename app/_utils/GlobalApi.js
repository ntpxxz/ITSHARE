export const {default:axios} = require("axios");

const SendEmail=()=>axios.post('/api/send',data);
export default{ SendEmail}