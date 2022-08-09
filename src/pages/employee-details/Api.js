import { baseApi } from "../../services/Api";

const employeedetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: (id) => `employee/${id}`,
      providesTags: ["EmployeeList"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetEmployeeQuery } = employeedetailsApi;
