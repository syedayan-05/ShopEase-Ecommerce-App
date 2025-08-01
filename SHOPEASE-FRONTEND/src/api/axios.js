import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api', // ✅ Make sure backend runs on 8080
    headers: {
        // Default header (for GET and most POST)
        'Content-Type': 'application/json',
    },
    withCredentials: false, // only if needed (you can skip if not using cookies)
});

export default instance;
