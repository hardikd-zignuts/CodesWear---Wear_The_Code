import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const Navbar = () => {
  const ref = useRef(null);
  const toogleCart = () => {
    if (ref.current.className.includes("translate-x-full")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.className.includes("translate-x-0")) {
      ref.current.classList.add("hidden");
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center">
        <Link
          id="logo"
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/logo.png" width="200" height="100" alt="home" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
                    <Link href='/contact' className="mr-5 hover:text-gray-900">Contact</Link> */}
          <Link id="hoodie" href="/hoodie" className="mr-5 hover:text-gray-900">
            Hoodies
          </Link>
          <Link id="tshirt" href="/tshirts" className="mr-5 hover:text-gray-900">
            T Shirst
          </Link>
          <Link id="sticker" href="/sticker" className="mr-5 hover:text-gray-900">
            Sticker
          </Link>
          <Link id="mug" href="/mug" className="mr-5 hover:text-gray-900">
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
        className="hidden z-50 absolute right-0 w-[400px] top-0 flex h-[100vh] flex-col justify-start pt-14  bg-pink-200 text-black transition duration-500 transform translate-x-full cursor-pointer"
      >
        <div onClick={toogleCart} className="absolute right-3 top-3">
          <AiFillCloseCircle size={25} />
        </div>
        <ol className="p-4 text-xl">
          <div className="flex justify-between">
            1. T shirts
            <div className="flex items-center gap-2">
              <AiOutlineMinusCircle />2<AiOutlinePlusCircle />
            </div>
          </div>
        </ol>
        <div className="flex gap-3 m-3">
          <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
          <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
            Clear Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
