import Link from 'next/link';

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container flex mx-auto min-h-[8vh] justify-between items-center">
        <Link href="/" passHref>
          <a>
            <h1 className="font-mono text-lg">BOOK STORE</h1>
          </a>
        </Link>
        <Link href="/wishlist" passHref>
          <a>
            <h2 className="font-mono text-lg">WISH LIST</h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
