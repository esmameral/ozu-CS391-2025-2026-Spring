'use client'
import styles from "./page.module.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import products from "./components/data";
import { useState } from "react";

export default function Home() {
  const [productList,setProductList]=useState(products);
  var messageText = "Hello First ReactJS Component"
  
  
   const test = () => {
    alert("test")
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header message={messageText} />
        <Catalog products={productList} test={test}/>
      </main>
    </div>
  );
}
