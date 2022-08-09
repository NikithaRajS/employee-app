import { baseApi } from "../../services/Api";

const deleteemployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteEmployee: builder.mutation({
      query: (id) => {
        return {
          url: `employee/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["EmployeeList"],
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteEmployeeMutation } = deleteemployeeApi;
