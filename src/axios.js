import axios from 'axios';
//popular fetching library
//axios vs js fetch apis, axios is easier and better

const instance=axios.create({
    baseURL:'http://localhost:5001/clone-a2550/us-central1/api'//the api(cloud function) url
    //method post req as declared in payment.js
});

export default instance;