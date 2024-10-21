import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
     // addItem: (state, action) => {},
  },
});

export default cartSlice.reducer;
// export const { addItem } = cartSlice.actions;
