import Image from "next/image";
import Link from "next/link";
import User from "./User";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 mb-4">
      <Link
        href="https://smriti.co/"
        target="_blank"
        className="p-2 hover:bg-blue-100/30 rounded-md"
      >
        <Image src="/image2.png" alt="logo" height={70} width={70} />
      </Link>
      <User />
    </div>
  );
};

export default Header;
