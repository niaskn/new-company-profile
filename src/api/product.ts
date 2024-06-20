import axios from "axios";
const BASE_URL = 'https://666be8e149dbc5d7145bb9cc.mockapi.io'

export const getProducts = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/beautyproduct`)
        return response.data
    } catch (error) {
        return error
    }
}