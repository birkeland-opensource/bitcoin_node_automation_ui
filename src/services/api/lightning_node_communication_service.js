import axios from "axios";

export const get_accounting_info = async (get_object) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/accounting/get_accounting_info`, get_object);
   
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}