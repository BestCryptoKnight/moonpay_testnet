// import models
import { ICurrency } from "../models";

export const getCurrency = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_FETCH_API}`, {
            method: 'GET',
        });
        
        const responseData: Array<ICurrency> = await response.json();
        return responseData;
    } catch (err) {
        throw err;
    } 
}