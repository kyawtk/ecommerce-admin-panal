import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import { imageApi } from "../constants/data";

const ProductCard = ({ name, _id, description, image, price, category }) => {
  const settings = {
    dots: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col md:flex-row m-5 rounded-sm shadow max-w-[700px] gap-2">
      <div className="grid grid-cols-2">
        {image &&
          image.map((img) => {
            return (
              <InnerImageZoom
                key={img}
                width={200}
                src={`${imageApi}${img}/`}
                zoomSrc={`${imageApi}${img}/`}
              />
            );
          })}
      </div>
      <div className="flex flex-col gap-3">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="flex justify-between w-full">
          <p>{price}$</p>
          <p>{category.category}</p>
        </div>
        <button className="bg-red-500 rounded-md px-2 py-2 text-white">
          Remove Product 🗑️{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
