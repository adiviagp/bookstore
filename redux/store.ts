import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
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

export const selectSearch = (state: RootState) => state.books.search;
export const selectFilteredBooks = (state: RootState) => state.books.books;
