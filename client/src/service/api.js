import axios from 'axios';
// import { response } from 'express';
const API_URL = 'http://localhost:8000';
const response = undefined;
export const uploadFile = async (data) => {
    try{
           let response = await axios.post(`${API_URL}/upload`,data);
           return response.data;

    }catch(error){
            console.error('error whiling calling the function',error.message)
    }
}

