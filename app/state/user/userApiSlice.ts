import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
        credentials: "include"
    }),
    tagTypes: ["User"],
    endpoints: (builder) => {
        return {
            getCurrentUser: builder.query({
                query: () => "/me",
                providesTags: ["User"]
            }),
            register:builder.mutation({
                query: (requestData) => ({
                    url: "/register",
                    method: "POST",
                    body: requestData
                }),
                invalidatesTags: ["User"]
            }),
            login:builder.mutation({
                query: (requestData) => ({
                    url: "/login",
                    method: "POST",
                    body: requestData
                }),
                invalidatesTags: ["User"]
            }),
            logout:builder.mutation({
                query: () => ({
                    url: "/logout",
                    method: "POST"
                }),
                invalidatesTags: ["User"]
            })
            
        }
    }
})

export const {
    useGetCurrentUserQuery,
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation
} = userApiSlice;