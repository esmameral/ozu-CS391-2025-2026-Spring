'use client'
import styles from "./page.module.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import products from "./components/data";
import { useEffect, useState } from "react";
import AddNewProduct from "./components/AddNewProduct/page";
import { MyContext } from './components/MyContext';
import DataLoading from "./components/DataLoading";


export default function Home() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const addProduct1 = (newProduct) => {
    setProductList([...productList, newProduct]);
  }

  const addProduct2 = async (newProduct) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newProduct)
    }
    try {
      const response = await fetch(`http://localhost:8000/products`, options);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
  const deleteProduct1 = (id) => {
    const newList = productList.filter(
      (product) => {
        return product.id !== id;
      }
    );
    console.log(newList);
    setProductList(newList);
  }
  const deleteProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/products/" + id, { method: 'DELETE' })
      console.log(response);
    }
    catch (error) {
      console.log(error)
    }
    setIsLoading(true)
  }
  const addProduct = (newProduct) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newProduct)
    }
    fetch(`http://localhost:8000/products`, options)
      .then(response => console.log(response))
      .catch(error => console.log(error))

  }
  
  const loadProducts2 = async () => {
    try {
      const response = await fetch(`http://localhost:8000/products`)
      const data = await response.json();
      setIsLoading(false);
      setProductList(data);
    }
    catch (error) {
      console.log(error)
    }
  }

  const loadProducts = () => {
    fetch(`http://localhost:8000/products`)
    .then(response => response.json())
    .then((data)=>{console.log(data);
      setProductList(data);
      setIsLoading(false)})
    .catch(error => console.log(error))    
  }
  
  const contextObject = { products: productList, onDelete: deleteProduct, onAdd: addProduct }

   useEffect(
    () => {
      if (isLoading) {
        loadProducts();
      }
    }
  );



  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <MyContext.Provider value={contextObject}>
          {isLoading ? <DataLoading></DataLoading> :
            <>
              <AddNewProduct />
              <Catalog />
            </>
          }
        </MyContext.Provider>
      </main>
    </div>
  );
}
