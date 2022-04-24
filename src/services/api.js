import axios from "axios";

// 01310930/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"  /*baseUrl é algo que não vai mudar é a url base da API*/
})

export default api;