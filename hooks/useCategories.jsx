import { useEffect, useState } from "react";
import axios from "axios";
import { apiToFetch } from "../src/constants/data";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      const res = await axios.get(`${apiToFetch}/categories`);
      console.log(res);
      setCategories(res.data);
    }
    getCategories();
  }, []);

  return categories;
};
