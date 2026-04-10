'use client'
import styles from "./page.module.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import products from "./components/data";
import { useState } from "react";
import AddNewProduct from "./components/AddNewProduct/page";


export default function Home() {
  const [productList,setProductList]=useState(products);
  var messageText = "Hello First ReactJS Component"
  
  
   const deleteProduct = (id) => {
    const newList = productList.filter(
        (product) => {
                return product.id !== id;
          }
    );  
    console.log(newList);
    setProductList(newList);
  }

  const addProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header message={messageText} />
        <AddNewProduct onAdd={addProduct}></AddNewProduct>
        <Catalog products={productList} onDelete={deleteProduct}/>
        
      </main>
    </div>
  );
}
