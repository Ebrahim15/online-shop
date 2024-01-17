"use client"

import React from 'react'
import { useSelector } from 'react-redux'


const page = () => {
    const products = useSelector((state) => state.products)
  return (
    <div>
        <ul>
            {
                products.map((product) => {
                    return <li key={product.id}>{product.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default page