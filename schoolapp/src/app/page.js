import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import products from "./components/data";

export default function Home() {
  var messageText = "Hello First ReactJS Component"
  return (
    <>
      <Header message={messageText} />
      <Catalog products={products} />
    </>

  );
}
