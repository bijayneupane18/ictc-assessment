import axios from "axios";

const baseURL= "https://66e84163b17821a9d9dbffd6.mockapi.io";


const axiosInstance = axios.create({
    baseURL: `${baseURL}/api/`,
});

const getService = async(url:string,params?:any) => {
    return params? axiosInstance.get(url,{params},) : axiosInstance.get(url);
};

const postService = async (url: string, data: any, config?: any) => {
    return axiosInstance.post(url, data, config);
};

const putService = async (url: string, data: any, config?: any) => {
    return axiosInstance.put(url, data, config);
};

const deleteService = async (url: string, config?: any) => {
    return axiosInstance.delete(url, config);
};

export { getService, postService, putService, deleteService };
export {baseURL};
