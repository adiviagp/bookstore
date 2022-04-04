import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/Content';
import { getBook } from '../redux/bookSlice';
import {
  selectFilteredBooks,
  selectWishlist,
  setSearch,
  store,
} from '../redux/store';
import { getWishlist } from '../redux/wishlistSlice';
import styles from '../styles/Home.module.css';

const WishlistPage: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      await store.dispatch(getWishlist());
    }
    fetchMyAPI();
    console.log(store.getState());
  }, []);

  const [inputSearch, setInputSearch] = useState<string>('');
  const handleSubmit = () => {
    dispatch(setSearch(inputSearch));
    dispatch(getBook(inputSearch));
    console.log(inputSearch);
  };

  const wishlists = useSelector(selectWishlist);
  return (
    <>
      <Head>
        <title>Bookstore</title>
        <meta name="description" content="Bookstore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto flex">
          {/* <Sidebar /> */}
          <Content data={wishlists} cardType="wishlist" />
        </div>
      </main>
    </>
  );
};

export default WishlistPage;
