import Image from 'next/image';
import React, { useEffect } from 'react';
import Book from '../redux/book.types';
import Rating from 'react-rating';

interface Props {
  book: Book;
}
const Card: React.FC<Props> = ({ book }) => {
  const titleSlice = (data: string) => {
    if (data) return data.substring(0, 25);
    return data;
  };
  const descSlice = (data: string) => {
    if (data) return data.substring(0, 50) + '...';
    return data;
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-[200px] mb-6 p-4 cursor-pointer hover:bg-gray-300 drop-shadow-md">
        <div className="flex">
          <div className="mt-[-30px]">
            <Image
              src={book.volumeInfo.imageLinks.thumbnail}
              width="100"
              height="160"
              layout="fixed"
              alt="Image"
            />
          </div>
          <div className="px-4 py-2">
            {/* <div className="flex justify-end mt-[-15px] mr-[-15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="#ec407a"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ec407a"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div> */}
            <h1 className="font-bold">{titleSlice(book.volumeInfo.title)}</h1>
            <p className="font-light">
              {titleSlice(
                book.volumeInfo.authors ? book.volumeInfo.authors[0] : '-'
              )}
            </p>

            <p className="font-light mt-2">
              {descSlice(book.volumeInfo.description)}
            </p>

            <Rating
              initialRating={book.volumeInfo.averageRating}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="gray"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#f9a825"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
            />
          </div>
        </div>
        <button
          type="button"
          className="inline-block w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add To Wishlist
        </button>
      </div>
    </div>
  );
};

export default Card;
