import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { authService } from './authService';
import { toast } from 'react-toastify';

const getUserfromSessionStorage = sessionStorage.getItem('customer')
    ? JSON.parse(sessionStorage.getItem('customer'))
    : null;

const initialState = {
    user: getUserfromSessionStorage,
    wishList: '',
    cart: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        return await authService.login(userData);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const getUserWishList = createAsyncThunk('auth/get-wishlist', async (thunkAPI) => {
    try {
        return await authService.getUserWishList();
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const addToCart = createAsyncThunk('auth/add-to-cart', async (dataCart, thunkAPI) => {
    try {
        return await authService.addToCart(dataCart);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const getCart = createAsyncThunk('auth/get-cart', async (thunkAPI) => {
    try {
        return await authService.getCart();
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const logout = createAsyncThunk('auth/logout', async (thunkAPI) => {
    try {
        return await authService.logout();
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const resetState = createAction('Reset-all');

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                if (state.isSuccess === true) {
                    toast.success('Đăng ký thành công!');
                }
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error('Đăng ký thất bại!');
                }
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                if (state.isSuccess === true) {
                    sessionStorage.setItem('token', action.payload.token);
                    toast.success('Đăng nhập thành công!');
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error('Đăng nhập thất bại!');
                }
            })
            .addCase(getUserWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.wishList = action.payload;
            })
            .addCase(getUserWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addcart = action.payload;
                if (state.isSuccess === true) {
                    toast.success('Sản phẩm được thêm vào giỏ hàng');
                }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error('Đã có lỗi xảy ra!!!');
                }
            })
            .addCase(getCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.cart = action.payload;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.logout = action.payload;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default authSlice.reducer;
