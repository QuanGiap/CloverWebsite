const BASE_URL = process.env.NEXT_PUBLIC_API_URL; // must be prefixed with NEXT_PUBLIC_
import axios from "axios";
interface loginInterface{
  user_id: string;
  email: string;
  game_history: historyInterface[];
  stamps: stampInterface[];
}

interface historyInterface {
  id: string;
  code_place_name: string;
  date: string;
  points: number;
  time: number;
  user_id: string;
  place_name: string;
  flag_img_url: string;
  icon_url: string;
  address:string;
}

interface stampInterface {
  place_id:string;
  place_name: string;
  icon_url: string;
  has_stamp: boolean;
}
const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,    
})
export async function getStamp(email:string):Promise<[Error | null, loginInterface | null]>{
    try{
        const res = await axiosInstance.post('/auth/login',{
          email,
        })
        return [null,res.data as loginInterface];

    }catch(error){
        console.error("Error during login:", error);
        return [error as Error,null];
    } 
}
export async function login(email:string):Promise<boolean>{
  try{
    await axiosInstance.get('/auth?email='+encodeURIComponent(email));
    return true;
  } catch(error:any){
    if(error.response?.status !== 404){
      console.error("Error during login:", error);
    }
    return false;
  }
}
export async function submitStamp(email:string,code:string){
    try {
        const res = await axiosInstance.post('/data/save',{email,code});
        return [null,res];
    } catch (error) {
        return [error,null];
    }
}

export type {loginInterface}