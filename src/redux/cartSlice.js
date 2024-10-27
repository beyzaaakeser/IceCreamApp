import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.cart.find(
        (item) =>
          item.id === payload.item.id &&
          item.selectedType === payload.selectedType
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...payload.item,
          selectedType: payload.selectedType,
          quantity: 1,
        });
      }
    },

    createOrder: (state) => {
      state.cart = [];
    },

    deleteFromCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) =>
          item.id === payload.id && item.selectedType === payload.selectedType
      );

      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { addToCart, createOrder, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
