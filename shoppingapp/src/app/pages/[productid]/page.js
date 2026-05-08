'use client'
import DataLoading from "@/app/components/DataLoading"
import Image from "next/image"
import { use, useEffect, useState } from "react"

export default function ProductDetail({ params }) {
   const { productid } = use(params)
   const [product, setProduct] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const loadProduct = (productid) => {
      fetch("http://localhost:8000/products/" + productid)
         .then(response => response.json())
         .then(data => {
            setProduct(data);
            setIsLoading(false);
         })
         .catch(error => { console.log(error) })
   }
   useEffect(() => {
      loadProduct(productid)
      
   }, [productid])

   return <div>
      {isLoading && <DataLoading></DataLoading>}
      {!isLoading &&
         <div>
            <h2>Product Detail Page</h2>
            <Image src={product.image} width="300" height="300" alt="product image"></Image>
            <br />
            <b>id:</b> {product.id}
            <br />
            <b>Name:</b> {product.name}
            <br />
            <b>Description:</b> {product.description}
         </div>
      }
   </div>

}