import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  selectedProduct: null,
  openSnackbar:false,
  snackbarMessage:''
};

export const addData = createAsyncThunk("addData", async () => {
  const response = await axios.get(
    "https://66fcde2bc3a184a84d1834e8.mockapi.io/api/users/products"
  );
  return response.data;
});

// Yeni card əlavə etmək üçün async thunk
export const addProduct = createAsyncThunk(
  "addProduct",
  async (newProduct, thunkApi) => {
    try {
      const response = await axios.post(
        "https://66fcde2bc3a184a84d1834e8.mockapi.io/api/users/products",
        newProduct
      );
      thunkApi.dispatch(addData());
      return response.data;
    } catch (err) {
      thunkApi.rejectWithValue("Error!");
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      console.log(action.payload);
      state.selectedProduct = action.payload;
    },
    closeSnackBarss:(state)=>{
      state.openSnackbar=false
      state.snackbarMessage=""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.openSnackbar = true;
        state.snackbarMessage = "Data fetched successfully";  
      })
      
      .addCase(addData.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setSelectedProduct,closeSnackBarss } = dataSlice.actions;

export default dataSlice.reducer;
