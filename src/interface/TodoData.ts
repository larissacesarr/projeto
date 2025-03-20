export interface TodoData{
    id: string,
    title: string
    description: string,
    completed: boolean
}

export interface UseApiProps {
    method: "GET" | "POST" | "PUT" | "DELETE";
    url: string;
}

export interface CreateTodoData {
    title: string;
    description: string;
    completed: boolean;
}