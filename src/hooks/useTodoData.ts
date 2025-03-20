import  axios, { AxiosPromise }  from "axios"
import { TodoData } from "../interface/TodoData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

const fechData = async (): AxiosPromise<TodoData[]> => {
    const response = axios.get(API_URL + "/tasks");
    return response;
}


export function useTodoData(){
    const query = useQuery({
        queryFn: fechData,
        queryKey: ['todo-data'],
        retry: 2,
    })

    return {
        ...query,
        data: query.data?.data
    }
}