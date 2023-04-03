import Loader from '@/components/Loader'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Products = () => {
    const total = 100
    const [num, setNum] = useState(0)
    const [productData, setProductData] = useState([])

    const fetchMoreData = async () => {
        const res = await axios.get(`https://dummyjson.com/products?limit=9&skip=${num}`)
        setTimeout(() => {
            setProductData(productData.concat(res.data.products))
            setNum(prev => prev + 9)
        }, 1000)
    };
    const fetchInitial = async () => {
        let res = await fetch('https://dummyjson.com/products?limit=9&skip=0');
        let data = await res.json()
        setProductData(data.products)
        setNum(prev => prev + 9)
    }
    useEffect(() => {
        fetchInitial()
    }, [])
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">



                    <InfiniteScroll
                        dataLength={productData.length}
                        next={fetchMoreData}
                        hasMore={num < total}
                        loader={<Loader />}
                    >
                        <div className="flex flex-wrap justify-around m-4">
                            {
                                productData.map(item => {
                                    const { thumbnail, title, description, price, id } = item
                                    return (
                                        <div key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full border shadow-md rounded-md text-center m-2 cursor-pointer">
                                            <Link href={`/products/${id}`}>
                                                <a className="block relative  rounded overflow-hidden">
                                                    <Image width={420} height={216} alt="ecommerce" className="mx-auto h-[32vh] w-auto" src={thumbnail} />
                                                </a>
                                                <div className="mt-4">
                                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                                    <h2 className="text-gray-900 title-font text-lg font-medium">{description}</h2>
                                                    <p className="mt-1">${price}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </InfiniteScroll>


                </div >
            </section >
        </>
    )
}

export default Products
