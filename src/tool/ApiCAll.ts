const BASE_URL = process.env.NEXT_PUBLIC_API_URL; // must be prefixed with NEXT_PUBLIC_
import axios from "axios";
const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,    
})
export async function login(email:string) {
    try{
        const res = await axiosInstance.post('/auth/login',{
          email,
        })
        return [null,res.data];

    }catch(error){
        console.error("Error during login:", error);
        return [error,null];
    }
  
}