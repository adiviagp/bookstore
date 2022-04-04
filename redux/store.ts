import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';
import { wishlistSlice } from './wishlistSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    wishlists: wishlistSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const { rehydrate, setSearch } = bookSlice.actions;
export const { rehydrate: rehydrateWishlist, setSearch: searchWishlist } =
  wishlistSlice.actions;

export const selectSearch = (state: RootState) => state.books.search;
export const selectFilteredBooks = (state: RootState) => state.books.books;

export const selectWishlist = (state: RootState) => state.wishlists.wishlists;
