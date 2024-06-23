import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ChicSlice";
import {  toast } from "react-toastify";


const ProductCart = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = products.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/products/${rootId}`, {
      state: {
        item: products,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: products.id,
        title: products.title,
        price: products.price,
        quantity: 1,
        description: products.description,
      })
    );
    toast.success(`${products.title} is added to cart`);
  };

  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          src={products.image}
          alt={products.title}
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {products.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">
                ${products.rating.count}
              </p>
              <p className="font-semibold">${products.price}</p>
            </div>
            <div
              onClick={handleAddToCart}
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div>
          <p>{products.category}</p>
        </div>
        {products.isNew && (
          <div className="absolute top-4 right-0">
            <p className="bg-black text-white font-semibold font-titleFont px-6">
              Sale
            </p>
          </div>
        )}
      </div>
    
    
    </div>
  );
};

export default ProductCart;
