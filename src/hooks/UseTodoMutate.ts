/* eslint-disable @typescript-eslint/no-explicit-any */
import  axios, { AxiosPromise }  from "axios"
import { TodoData } from "../interface/TodoData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

const postData = async (data: Partial<TodoData>): AxiosPromise<TodoData> => {
    return await axios.post(API_URL + "/tasks", data);
}


export function useTodoDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todo-data'] });
        }
    })

    return mutate;
}
