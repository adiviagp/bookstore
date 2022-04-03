import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/bookSlice';
import { store, selectFilteredBooks } from '../redux/store';
import Card from './Card';

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      await store.dispatch(getBook());
    }
    fetchMyAPI();
    console.log(store.getState());
  }, []);

  const books = useSelector(selectFilteredBooks);
  return (
    <div className="flex-1 w-64">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {books.map((book, index) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Content;
