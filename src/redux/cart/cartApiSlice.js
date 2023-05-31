import { apiSlice } from '../../app/api/apiSlice';

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (credentials) => ({
        url: '/cart',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useCreateCartMutation } = cartApiSlice;
