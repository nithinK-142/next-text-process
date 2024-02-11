import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex justify-center items-center">
        <Link href={"/"} className="hidden">
          <div className="text-6xl rounded-full hover:bg-slate-100"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 opacity-40"><path d="m15 18-6-6 6-6"/></svg></div>
        </Link>
        <Link
          href="https://smriti.co/"
          target="_blank"
          className="p-2 hover:bg-blue-100/30 rounded-md ml-8"
        >
          <Image src="/image2.png" alt="logo" height={70} width={70} />
        </Link>
      </div>
      <div>user</div>
    </div>
  );
};

export default Header;
