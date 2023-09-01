import { useEffect, useState } from "react";
import axios from "axios";
export const useProducts = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function getproducts() {
      const res = await axios.get("http://localhost:5000/api/v1/products");
      console.log(res);
      setproducts(res.data);
    }
    getproducts();
  }, []);

  return products;
};