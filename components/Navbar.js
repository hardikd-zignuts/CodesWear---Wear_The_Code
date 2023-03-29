import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const ref = useRef(null);
  const toogleCart = () => {
    if (ref.current.className.includes("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.className.includes("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/logo.png" width="200" height="100" alt="home" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
                    <Link href='/contact' className="mr-5 hover:text-gray-900">Contact</Link> */}
          <Link href="/hoodie" className="mr-5 hover:text-gray-900">
            Hoodies
          </Link>
          <Link href="/tshirts" className="mr-5 hover:text-gray-900">
            T Shirst
          </Link>
          <Link href="/sticker" className="mr-5 hover:text-gray-900">
            Sticker
          </Link>
          <Link href="/mug" className="mr-5 hover:text-gray-900">
            Mug
          </Link>
        </nav>
        <div
          onClick={toogleCart}
          className="cursor-pointer hover:text-pink-500"
        >
          <AiOutlineShoppingCart size={30} />
        </div>
      </div>

      <div
        ref={ref}
        className="absolute right-0 w-[200px] top-0 flex h-[500px] flex-col justify-start pt-14  bg-gray-900 text-white transition duration-500 transform translate-x-full"
      >
        <div onClick={toogleCart} className="absolute right-3 top-3">
          <AiFillCloseCircle size={25} />
        </div>
        <a href="#" className="px-4 py-2 hover:bg-gray-800">
          Link 1
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-800">
          Link 2
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-800">
          Link 3
        </a>    
      </div>
    </header>
  );
};

export default Navbar;
