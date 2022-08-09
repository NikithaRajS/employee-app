import { baseApi } from "../../services/Api";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginEmployee: builder.mutation({
      query: (payload) => {
        return {
          url: `employee/login`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginEmployeeMutation } = loginApi;
