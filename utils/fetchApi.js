import axios from 'axios'

export const baseUlr = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '7b07389cb4msha1d6561e803a55dp143dd5jsn61c3821b41f1'
        } 
    })
    return data
}
