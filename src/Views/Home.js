import React, {useState, useEffect} from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import {useAxiosGet} from '../Hooks/HttpsRequests'


function Home(){
    const url = `https://5f7ff8c0d6aabe00166f0c50.mockapi.io/lr/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>
            There was an error please refresh or try again
        </p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }


    if(products.data){
        content = 
        products.data.map((product) => 
            <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }


    return (
        <div>
        <h1 className="font-bold text-2x1 mb-3">Best sellers</h1>
        
        {content}

        </div>

    )
}

export default Home