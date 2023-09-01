import * as LR from "@uploadcare/blocks";
import { PACKAGE_VERSION } from "@uploadcare/blocks";
import { useRef, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

import { useCategories } from "../../hooks/useCategories";
import { apiToFetch } from "../constants/data";
LR.registerBlocks(LR);

const AddProduct = () => {
  const categories = useCategories();
  const [files, setFiles] = useLocalStorage("files", []);
  console.log(files);
  const dataOutputRef = useRef();
  const [form, setForm] = useLocalStorage("form", {
    name: "",
    description: "",
    price: "",
    category: "",
    image: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure 'name' and 'value' from the input element

    setForm((prev) => ({
      ...prev,
      [name]: value, // Use the 'name' as a key to update the corresponding state property
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      ...form,
      image: files.map((file) => file.uuid),
    };

    axios.post(`${apiToFetch}/products`, product).then((res) => {
      console.log(res);
      localStorage.removeItem("form");
      localStorage.removeItem("files");
        location.reload();
    });
  };

  useEffect(() => {
    window.addEventListener("LR_DATA_OUTPUT", (e) => {
      const { data } = e.detail;
      setFiles(data);
    });
    return () => {
      window.removeEventListener("LR_DATA_OUTPUT", (e) => {});
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 px-5 py-5">
      <h1>Add a new product to your online store 🛒</h1>
      <div className="flex flex-col gap-3">
        <h2 className="label">Images</h2>
        <div className="flex flex-col border-dotted border-slate-200 border-2 rounded-lg p-4 min-w-[300px] min-h-[300px] justify-center items-center gap-3">
          <div className="">
            <lr-config
              ctx-name="my-uploader"
              pubkey="12693dd8a14c12bfd856"
              maxLocalFileSizeBytes={10000000}
              multipleMax={10}
              store={1}
              imgOnly={true}
              sourceList="local"
            ></lr-config>
            <lr-file-uploader-regular
              ctx-name="my-uploader"
              class="my-config"
              css-src={`https://unpkg.com/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
            ></lr-file-uploader-regular>
            <lr-data-output
              ref={dataOutputRef}
              ctx-name="my-uploader"
              use-event
            ></lr-data-output>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {files.map((file) => (
              <div
                key={file.uuid}
                className=" w-[200px] h-[200px] rounded-md overflow-hidden "
              >
                <img
                  src={`https://ucarecdn.com/${file.uuid}/${
                    file.cdnUrlModifiers || ""
                  }-/preview/-/scale_crop/400x400/`}
                  className="w-full h-full object-cover"
                  alt="Preview"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex felx-col gap-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 min-w-[400px]">
            <label className="label">
              Product Name
              <input
                type="text"
                value={form.name}
                onChange={handleChange}
                name="name"
                required
                placeholder="Name"
              />
            </label>
            <label className="label">
              Description
              <textarea
                value={form.description}
                name="description"
                required
                placeholder="Description"
                onChange={handleChange}
                className="min-h-[200px] bg-slate-100 outline-none px-2 py-2"
              />
            </label>
            <label className="label">
              Price
              <input
                type="number"
                required
                min={1}
                value={form.price}
                name="price"
                onChange={handleChange}
                placeholder="Price"
              />
            </label>
            <label className="label">
              Category
              <select
                name="category"
                id="category"
                value={form.category}
                onChange={handleChange}
              >
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <option key={index} value={category._id}>
                        {category.category}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
