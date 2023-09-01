import { Route, Routes } from "react-router-dom";
import { Sidebar, Analytics, Products, Orders,AddProduct,Categories } from "./components";

function App() {
  return (
    <>
      <div className="flex ">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/analytics" element={<Analytics></Analytics>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>

          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
