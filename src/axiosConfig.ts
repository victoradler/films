import axios from "axios";

// Criação de intância do axios
const api = axios.create({
  baseURL: "http://localhost:3000", // URL base da API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

//Aqui criei  um interceptor para adicionar o token de autenticação em todas as requisições
api.interceptors.request.use(
  (config) => {
    // Recuperar o token do localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Se existir token, adicionar no cabeçalho da requisição
      config.headers.Authorization = `Bearer ${token}`; // Adiciona o token no cabeçalho da requisição
    }
    return config; // Retorna a configuração da requisição
  },
  (error) => {
    // Caso ocorra um erro
    return Promise.reject(error); // Retorna o erro
  }
);

export default api;
