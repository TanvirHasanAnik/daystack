import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Task } from "@/app/(daystack)/todo/types";

export const taskApiSlice = createApi({
    reducerPath: "tasks",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/todo`,
        credentials: "include"
    }),
    tagTypes: ["Task"],
    endpoints: (builder) => {
        return {
            getAllTasks: builder.query<Task[],void>({
                query: () => "/tasks",
                providesTags: ["Task"]
            }),
            createTask:builder.mutation<any, Task>({
                query: (requestData) => ({
                    url: "/tasks",
                    method: "POST",
                    body: requestData
                }),
                invalidatesTags: ["Task"]
            }),
            updateTask:builder.mutation<any, Task>({
                query: (requestData: Task) => ({
                    url: `/tasks/${requestData.id}`,
                    method: "PATCH",
                    body: requestData
                }),
                invalidatesTags: ["Task"]
            }),
            deleteTask:builder.mutation<any,any>({
                query: (id: number) => ({
                    url: `/tasks/${id}`,
                    method: "DELETE"
                }),
                invalidatesTags: ["Task"]
            })
            
        }
    }
})

export const {
    useGetAllTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = taskApiSlice;