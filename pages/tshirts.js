import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TShirts = ({ productData }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-around -m-4">

                    {
                        productData.map((shirt, index) => {
                            return (

                                <div key={shirt.img} className="lg:w-1/4 md:w-1/2 p-4 w-full border shadow-md rounded-md text-center m-2">
                                    <a className="block relative  rounded overflow-hidden">
                                        <Image width={420} height={216} alt="ecommerce" className="mx-auto h-[32vh] w-auto" src={shirt.img} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{shirt.category.toUpperCase()}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{shirt.name}</h2>
                                        <p className="mt-1">₹{shirt.price}</p>
                                    </div>
                                    <Link href={`/product/${shirt.category}/${shirt.name}`}>
                                        <button id={`t${index}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mt-3 px-4 rounded-full">
                                            View
                                        </button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </section>
    )
}

export default TShirts

export async function getServerSideProps() {

    const res = await fetch('http://localhost:4000/tshirts')
    const data = await res.json()

    return {
        props: {
            productData: data
        }
    }
}