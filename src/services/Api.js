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
  endpoints: () => ({})
});


