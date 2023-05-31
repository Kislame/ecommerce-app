import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    loading: false,
    lastFetch: null,
    quantity: 0,
    total: 0,
  },
  reducers: {
    productAdded: (cart, action) => {
      cart.quantity += 1;
      cart.products.push(action.payload);
      cart.total += action.payload.price * action.payload.quantity;
    },
    productRemoved: (cart, action) => {
      cart.quantity -= 1;
      const index = cart.products.findIndex(
        (item) => item._id === action.payload.id
      );
      const product = cart.products[index];
      const subPrice = product.price * product.quantity;
      cart.total -= subPrice;
      cart.products.splice(index, 1);
    },
  },
});

export const { productAdded, productRemoved } = cartSlice.actions;
export default cartSlice.reducer;
