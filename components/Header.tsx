type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container flex mx-auto min-h-[8vh] justify-between items-center">
        <h1 className="font-mono text-lg">BOOK STORE</h1>
        <h2 className="font-mono text-lg">WISH LIST</h2>
      </div>
    </div>
  );
};

export default Header;
