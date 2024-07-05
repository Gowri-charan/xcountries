import axios from "axios";

export const BACKEND_ENDPOINT = "https://xcountries-backend.azurewebsites.net"


export const fecthFlags = async()=>{
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/all`)
        console.log(res.data)
        return res.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}