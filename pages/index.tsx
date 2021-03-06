import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/Content';
import { getBook } from '../redux/bookSlice';
import { selectFilteredBooks, setSearch, store } from '../redux/store';
import { getWishlist } from '../redux/wishlistSlice';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      await store.dispatch(getBook());
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

  const books = useSelector(selectFilteredBooks);
  return (
    <>
      <Head>
        <title>Bookstore</title>
        <meta name="description" content="Bookstore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto p-10">
          <div className="flex items-center justify-center">
            <div className="flex border-2 border-gray-200 rounded w-full">
              <input
                type="text"
                className="px-4 py-2 w-full"
                placeholder="Search..."
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="px-4 text-white bg-gray-600 border-l "
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex">
          {/* <Sidebar /> */}
          <Content data={books} cardType="book" />
        </div>
      </main>
    </>
  );
};

export default Home;
