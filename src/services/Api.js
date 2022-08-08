import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getStorage } from "./Utils";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getStorage("idToken");
      console.log(token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["EmployeeList"],
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => `employee/`,
      providesTags: ["EmployeeList"],
    }),
    getEmployee: builder.query({
      query: (id) => `employee/${id}`,
      providesTags: ["EmployeeList"],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => {
        return {
          url: `employee/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["EmployeeList"],
    }),

    loginEmployee: builder.mutation({
      query: (payload) => {
        return {
          url: `employee/login`,
          method: "POST",
          body: payload,
        };
      },
    }),

    updateEmployee: builder.mutation({
      query: ({ id, payload }) => {
        return {
          url: `employee/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["EmployeeList"],
    }),

    createEmployee: builder.mutation({
      query: (payload) => {
        return {
          url: `employee`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["EmployeeList"],
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useCreateEmployeeMutation,
  useGetEmployeeQuery,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useLoginEmployeeMutation,
} = baseApi;
