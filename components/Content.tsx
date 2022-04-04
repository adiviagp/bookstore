import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../redux/book.types';
import { getBook } from '../redux/bookSlice';
import { store, selectFilteredBooks } from '../redux/store';
import Wishlist from '../redux/wishlist.types';
import Card from './Card';
import WishlistCard from './WIshlistCard';

interface Props {
  data: any;
  cardType: 'book' | 'wishlist';
}
const Content: React.FC<Props> = ({ data, cardType }) => {
  return (
    <div className="flex-1 w-64">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {cardType === 'book' &&
          data.map((data: Book, index: number) => (
            <Card key={index} book={data} />
          ))}
        {cardType === 'wishlist' &&
          data.map((data: Wishlist, index: number) => (
            <WishlistCard key={index} wishlist={data} />
          ))}
      </div>
    </div>
  );
};

export default Content;
