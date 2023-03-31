import { addToCart, clearCart, removeFromCart } from "@/redux/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const ref = useRef(null);
  const total = useSelector(state => state.total)
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()
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
  const handleIncrement = () => {

  }
  const handleDecrement = () => {

  }
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
          id="cart-open"
          onClick={toogleCart}
          className="cursor-pointer hover:text-purple-500 relative"
        >
          <span className="bg-purple-600 absolute right-[-5px] top-[-11px]  text-white rounded-full px-1">{total}</span>
          <AiOutlineShoppingCart size={30} />
        </div>
      </div>

      <div
        id="cart"
        ref={ref}
        className="hidden z-50 absolute right-0 w-[400px] top-0 flex h-[100vh] flex-col justify-start pt-14  bg-purple-200 text-black transition duration-500 transform translate-x-full cursor-pointer"
      >
        <div id="cart-close" onClick={toogleCart} className="absolute right-3 top-3">
          <AiFillCloseCircle size={25} />
        </div>
        <ol className="p-4 text-xl">
          {
            product.length == 0
              ? <h2>No items Avalible</h2> :

              product.map((item, index) => {
                const { name, price, id } = item
                return (
                  <div key={item.id} className="flex text-sm items-center justify-between">
                    <div>
                      {index + 1}. {item.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineMinusCircle size={20} onClick={() => dispatch(removeFromCart({
                        id
                      }))} />

                      {item.quantity}

                      <AiOutlinePlusCircle size={20} onClick={() => dispatch(addToCart({
                        id,
                        name,
                        price,
                        quantity: 1
                      }))} />
                    </div>
                    <div className="ml-2 text-sm">
                      ₹{item.price}
                    </div>
                  </div>
                )
              })

          }

        </ol>
        <div className="flex gap-3 m-3">
          {
            (product.length !== 0) &&
            <>
              <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">
                Checkout
              </button>

              <button button onClick={() => dispatch(clearCart())} className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">
                Clear Cart
              </button>
            </>
          }
        </div>
      </div>
    </header >
  );
};

export default Navbar;
