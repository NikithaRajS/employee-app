import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => `employee/`,
    }),
  }),
});

export const { useGetAllEmployeesQuery } = baseApi;