import { baseApi } from "../../services/Api";

const employeelistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => `employee/`,
      providesTags: ["EmployeeList"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllEmployeesQuery } = employeelistApi;
