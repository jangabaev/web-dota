import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../helpers/base-query";

export const analysisSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    addUser: builder.mutation<any, any>({
      query: (newUser) => ({
        url: "/tgminiapp_analyze",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export default analysisSlice;

export const { useAddUserMutation } = analysisSlice;
