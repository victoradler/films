import { useMutation, useQuery } from "react-query";
import api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

export const useGet = (endpoint: string, params = {}) => {
  return useQuery(
    [endpoint, params],
    async () => {
      const { data } = await api.get(endpoint, { params });
      return data;
    },
    {
      staleTime: 1000 * 60 * 5, 
      cacheTime: 1000 * 60 * 10, 
    }
  );
};

export const usePost = (endpoint: string) => {
  return useMutation(async (newData) => {
    const { data } = await api.post(endpoint, newData);
    return data;
  });
};

export const usePut = (endpoint: string) => {
  return useMutation(async (updatedData) => {
    const { data } = await api.put(endpoint, updatedData);
    return data;
  });
};

export const usePatch = (endpoint: string) => {
  return useMutation(async (updatedData) => {
    const { data } = await api.patch(endpoint, updatedData);
    return data;
  });
};

export const useDelete = (endpoint: string) => {
  return useMutation(async (id) => {
    const { data } = await api.delete(`${endpoint}/${id}`);
    return data;
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return logout;
};
