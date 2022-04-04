import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Book from './book.types';
import Wishlist from './wishlist.types';

export type WishlistState = {
  wishlists: Wishlist[];
  search: string;
  filteredWishlists: Wishlist[];
  pending: boolean;
  error: boolean;
};

const initialState: WishlistState = {
  wishlists: [],
  filteredWishlists: [],
  search: '',
  pending: false,
  error: false,
};

export const getWishlist = createAsyncThunk(
  'wishlist/getWishlist',
  async (search?: string) => {
    const response = await fetch(`https://booktravelioapi.herokuapp.com/book`);
    return await response.json();
  }
);

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    rehydrate(state, action: PayloadAction<WishlistState>) {
      state.error = action.payload.error;
      state.pending = action.payload.pending;
      state.wishlists = action.payload.wishlists;
      state.filteredWishlists = action.payload.filteredWishlists;
      state.search = action.payload.search;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.pending = true;
      })
      .addCase(getWishlist.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.wishlists = payload;
        state.filteredWishlists = payload;
      })
      .addCase(getWishlist.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});
