import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { productService } from './productService';
const initialState = {
    products: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};
export const getAllProduct = createAsyncThunk('product/get-all-product', async (thunkAPI) => {
    try {
        return await productService.getAllProduct();
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const getAProduct = createAsyncThunk('product/get-a-product', async (prodId, thunkAPI) => {
    try {
        return await productService.getAProduct(prodId);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const addToWishList = createAsyncThunk('product/add-to-wishlist', async (prodId, thunkAPI) => {
    try {
        return await productService.addToWishList(prodId);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const resetState = createAction('resetAll');

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.products = action.payload;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(addToWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.addToWL = action.payload;
            })
            .addCase(addToWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(getAProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.getAProd = action.payload;
            })
            .addCase(getAProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default productSlice.reducer;
