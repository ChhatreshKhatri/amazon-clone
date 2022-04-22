import axios from 'axios'

const instance=axios.create({
    baseURL:'http://localhost:5001/clone-af3e2/us-central1/api'//the api(cloud function) url
    //method post req as declared in payment.js
})

export default instance;