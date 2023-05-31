import { createSlice } from '@reduxjs/toolkit';
import { productsApiSlice } from './productsApiSlice';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {
    productsAdded: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApiSlice.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.items = action.payload;
      }
    );
  },
});

export const { productsAdded } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state) => state.products.items;

export const selectProductById = (state, id) =>
  state.products.items.find((product) => product._id === id);
