import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import {useAxiosGet} from '../Hooks/HttpsRequests'

function Product(){
    const {id} = useParams()
    const url = `https://5f7ff8c0d6aabe00166f0c50.mockapi.io/lr/products/${id}`
    let product = useAxiosGet(url)
    let content = null

    if(product.error){
        content = <p>
            There was an error please refresh or try again
        </p>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content =
        <div>
            <h1>{product.data.name}</h1>
            <div>
                <img src={product.data.images}
                alt={product.data.name}/>
            </div>

            <div>
            $ {product.data.price}
            </div>

            <div>
                {product.data.description}
            </div>
        </div>

    }

    return (
        <div>
            {content}
        </div>
    )

}

export default Product