import { IoMdAnalytics } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuBoxes } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import {AiOutlinePieChart} from 'react-icons/ai'
const isActiveLink = ({ isActive }) => {
  return isActive ? "font-bold" : "font-normal";
};

const Sidebar = () => {
  return (
    <nav className="flex flex-col p-3 bg-slate-100 min-h-screen md:w-[200px] w-fit shadow-lg mr-3">
      <div className="flex flex-col gap-3">
        <NavLink to="/orders" className={`nav-link`}>
          <AiOutlineShoppingCart></AiOutlineShoppingCart>Orders
        </NavLink>
        <NavLink to="/products" className={`nav-link`}>
          <LuBoxes></LuBoxes>Products
        </NavLink>
        <NavLink to="/add-product" className={`nav-link`}>
          <AiOutlinePlusCircle></AiOutlinePlusCircle>Add Product
        </NavLink>
        <NavLink to="/analytics" className={`nav-link`}>
          <IoMdAnalytics></IoMdAnalytics>Orders
        </NavLink>
        <NavLink to="/categories" className={`nav-link`}>
          <AiOutlinePieChart></AiOutlinePieChart>Categories
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
