import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HDRMv99a0lJHMNgimF4U43sNn7BqNSe0oyMj7lFnER8'
    }
});