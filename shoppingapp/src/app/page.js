'use client'
import styles from "./page.module.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import products from "./components/data";
import { useState } from "react";
import AddNewProduct from "./components/AddNewProduct/page";
import { MyContext } from './components/MyContext';


export default function Home() {
  const [productList, setProductList] = useState(products);
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
  const contextObject = { products:  productList , onDelete: deleteProduct , onAdd:  addProduct  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header message={messageText} />
        <MyContext.Provider value={contextObject}>
          <AddNewProduct/>
          <Catalog />
        </MyContext.Provider>
      </main>
    </div>
  );
}
