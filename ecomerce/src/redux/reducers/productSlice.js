import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.products.push(action.payload);
      } else {
        console.log("already added");
      }
    },
    viewProduct(state, action) {
      return state;
    },
    deleteProduct(state, action) {
      const removeProduct = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      state.products.splice(removeProduct, 1);
    },
  },
});

export const { addProduct, viewProduct,deleteProduct } = productSlice.actions;
export default productSlice.reducer;
