import { baseApi } from "../../services/Api";

const createeditApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

    getEmployee: builder.query({
      query: (id) => `employee/${id}`,
      providesTags: ["EmployeeList"],
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
  }),
  overrideExisting: false,
});

export const { useCreateEmployeeMutation, useGetEmployeeQuery,useUpdateEmployeeMutation } = createeditApi;
