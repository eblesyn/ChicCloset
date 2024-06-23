import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/ChicSlice";
import { toast } from "react-toastify";


const Products = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.item) {
      setDetails(location.state.item);
    }
  }, [location.state?.item]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: details.id,
        title: details.title, // Fixed typo
        image: details.image,
        price: details.price,
        quantity: baseQty,
        description: details.description,
      })
    );
    toast.success(`${details.title} is added to cart`);
  };

  return (
    <div>
      <div className="max-w-screen mx-auto ml-10px flex gap-10">
        <div>
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div>
              <p className="text-2xl font-medium text-gray-900">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500 mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category: <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default Products;
