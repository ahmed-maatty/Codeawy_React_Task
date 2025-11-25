import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  categories: Array<object>;
  products: Array<object>;
}

const initialState: InitialState = {
  categories: [],
  products: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    CreateProduct: (state, action: PayloadAction<object>) => {
      state.products.push(action.payload);
    },
    CreateCategory: (state, action: PayloadAction<object>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { CreateProduct , CreateCategory } = appSlice.actions;
export default appSlice.reducer;
