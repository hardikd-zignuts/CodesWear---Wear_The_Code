import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Navbar = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src='/logo.png' width='200' height='100' alt='home' />
                </Link>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {/* <Link href='/about' class="mr-5 hover:text-gray-900">About</Link>
                    <Link href='/contact' class="mr-5 hover:text-gray-900">Contact</Link> */}
                    <Link href='/hoodie' class="mr-5 hover:text-gray-900">Hoodies</Link>
                    <Link href='/tshirts' class="mr-5 hover:text-gray-900">T Shirst</Link>
                    <Link href='/sticker' class="mr-5 hover:text-gray-900">Sticker</Link>
                    <Link href='/mug' class="mr-5 hover:text-gray-900">Mug</Link>
                </nav>
                <div>
                    <AiOutlineShoppingCart size={30} />
                </div>
            </div>
        </header>

    )
}

export default Navbar
