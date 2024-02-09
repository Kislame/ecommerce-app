import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: '/user/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    userCheckout: builder.mutation({
      query: (credentials) => ({
        url: '/checkout/payment',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useLogoutMutation,
  useUserCheckoutMutation,
} = authApiSlice;
