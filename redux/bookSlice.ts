import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Book from './book.types';

export type PokemonState = {
  books: Book[];
  search: string;
  filteredBooks: Book[];
  pending: boolean;
  error: boolean;
};

const initialState: PokemonState = {
  books: [],
  filteredBooks: [],
  search: '',
  pending: false,
  error: false,
};

export const getBook = createAsyncThunk(
  'book/getBook',
  async (search: string) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        search ? search : 'a'
      }&maxResults=12&printType=books&filter=paid-ebooks`
    );
    return await response.json();
  }
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    rehydrate(state, action: PayloadAction<PokemonState>) {
      state.error = action.payload.error;
      state.pending = action.payload.pending;
      state.books = action.payload.books;
      state.filteredBooks = action.payload.filteredBooks;
      state.search = action.payload.search;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.pending = true;
      })
      .addCase(getBook.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.books = payload.items;
        state.filteredBooks = payload;
      })
      .addCase(getBook.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});
