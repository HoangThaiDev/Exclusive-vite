// Import Modules
import { useEffect, useState } from "react";
import axios from "axios";

// Import Component
import Header from "../component/Home/Header";
import ProductFlashSale from "../component/Home/ProductFlashSale";

export default function Home() {
  // Create + use Hooks
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios(
          "https://66a8f1b0e40d3aa6ff5a09e9.mockapi.io/api/v1/products"
        );
        const productsData = res.data;
        setProducts(productsData);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div className="home-page">
      <Header />
      {isLoading && <ProductFlashSale products={products} />}
    </div>
  );
}
