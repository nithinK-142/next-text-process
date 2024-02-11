import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
        <Link
          href="https://smriti.co/"
          target="_blank"
          className="p-2 hover:bg-blue-100/30 rounded-md"
        >
          <Image src="/image2.png" alt="logo" height={70} width={70} />
        </Link>
      <div>user</div>
    </div>
  );
};

export default Header;
