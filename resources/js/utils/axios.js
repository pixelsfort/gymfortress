import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/api", // Set API base URL
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true, // Required for Laravel Sanctum authentication
});

export default axiosInstance;
