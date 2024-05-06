import axios from "axios";

async function request(method, url, data) {
    return await axios.request({
        method,
        url,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

export default request;