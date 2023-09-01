import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useProducts();
  return (
    <div className="flex flex-col">
      {products &&
        products.map((product) => {
          return <ProductCard key={product._id} {...product}></ProductCard>;
        })}
    </div>
  );
};

export default Products;
