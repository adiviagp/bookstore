import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../redux/book.types';
import { selectWishlist, store } from '../redux/store';
import Wishlist from '../redux/wishlist.types';
import { getWishlist } from '../redux/wishlistSlice';
import Loading from './Loading';

interface Props {
  book: Book;
}
const ButtonAdd: React.FC<Props> = ({ book }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const wishlists = useSelector(selectWishlist);

  useEffect(() => {
    check();
  }, [wishlists]);

  const check = () => {
    const data = wishlists.filter((wl) => wl.bookId === book.id);
    data.length === 0 ? setIsAdded(false) : setIsAdded(true);
  };

  async function fetchMyAPI() {
    await store.dispatch(getWishlist());
  }
  const handleAdd = async (data: Book) => {
    setIsLoading(true);
    const iniData: Wishlist = {
      bookId: data.id,
      rating: data.volumeInfo.averageRating ? data.volumeInfo.averageRating : 0,
      title: data.volumeInfo.title ? data.volumeInfo.title : '',
      author: data.volumeInfo.authors ? data.volumeInfo.authors[0] : '',
      desc: data.volumeInfo.description ? data.volumeInfo.description : '',
      image: data.volumeInfo.imageLinks.thumbnail
        ? data.volumeInfo.imageLinks.thumbnail
        : '',
    };

    try {
      const response = await fetch(
        'https://booktravelioapi.herokuapp.com/book',
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(iniData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (data) {
        setIsLoading(false);
        fetchMyAPI();
      }

      return data;
    } catch (e) {
      return e;
    }
  };

  return (
    <>
      {isAdded ? (
        <button
          type="button"
          className="inline-block w-full px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          added to wishlist
        </button>
      ) : (
        <button
          onClick={() => handleAdd(book)}
          type="button"
          className="inline-block w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {isLoading ? <Loading /> : 'add to wishlist'}
        </button>
      )}
    </>
  );
};

export default ButtonAdd;
