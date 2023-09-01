import axios from "axios";
import { useCategories } from "../../hooks/useCategories";
import { apiToFetch } from "../constants/data";
import { useState } from "react";
import {AiOutlineDelete} from 'react-icons/ai'
const Categories = () => {
  const categories = useCategories();
  const [text, setText] = useState("");
  const addCategory = () => {
    axios.post(`${apiToFetch}/categories`, { category: text }).then((res) => {
      setText("");
      location.reload();
    });
  };
  const handleDelete=(id)=>{
    axios.delete(`${apiToFetch}/categories/${id}`).then(res=>{
      location.reload()
    })
  }
    return (
    <div className="flex flex-col">
      <div className="">
        <label>
          {" "}
          Add Category:{" "}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="button" onClick={addCategory}>
          Add
        </button>
      </div>
      {categories &&
        categories.map((category) => {
          return (
            <div className="flex justify-between px-3" key={category._id}>
              <p>{category.category}</p>
              <button onClick={()=>handleDelete(category._id)} type="button" className="hover:text-red-500  font-bold"> <AiOutlineDelete/></button>
            </div>
          );
        })}
    </div>
  );
};

export default Categories;
