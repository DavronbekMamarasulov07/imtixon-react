
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";


import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

import { useFetch } from "../../hooks/useFetch";
import { Button, Skeleton } from "antd";
import Container from "../../components/container/Container";
import MostProducts from "../../components/most_products/MostProducts";
import AppContext from "../../context/store";
import { ADD_TO_CART } from "../../action_types/ActionTypes";

const SingleProducts = () => {
  const [state, dispatch] = useContext(AppContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, loading] = useFetch("/products/" + id);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(1);


  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) {
      navigate("/");
    }
  };

  const handleIncrement = () => {
    if (count < data.countInStock) {
      setCount(count + 1);
    } else {
      toast.error("You can't add more than stock");
    }
  };

  function starsFunc(numString) {
    const munStars = 5 - Math.floor(numString);
    const stars = Array(Math.floor(numString)).fill(
      <AiFillStar className="fill-amber-500" />
    );
    const starsE = Array(munStars).fill(
      <AiOutlineStar className="fill-amber-500" />
    );

    return (
      <div className="starsWrapper flex items-center gap-2 mt-1">
        <div className="flex items-center gap-1 w-24">
          {stars} {starsE}
        </div>
        <span className="text-sm">{numString}/5.0</span>
      </div>
    );
  }

  const handleAddToCart = (data,count) => {
    dispatch({ type: ADD_TO_CART, data, count } )
    console.log(state);
    toast.success('Product added to wishlist', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }



  return (
    <div>
      <Nav />

      <Container>

        <div className="mt-20 py-20">

          {
            loading ?

              <div className="flex gap-16">
                <Skeleton.Image active className="skeloton_img" style={{ width: "500px", height: "500px" }} />
                <div className="flex flex-col gap-8">
                  <Skeleton.Input active className="skeloton_input" style={{ width: "500px", height: "50px" }} />
                  <div className="flex items-center gap-3">
                    <Skeleton.Input active className="skeloton_input" style={{ width: "50px", height: "30px" }} />
                    <Skeleton.Input active className="skeloton_input" style={{ width: "50px", height: "30px" }} />
                    <Skeleton.Input active className="skeloton_input" style={{ width: "50px", height: "30px" }} />
                  </div>

                  <Skeleton.Input active className="skeloton_input" style={{ width: "700px", height: "110px" }} />
                  <div className="flex items-center gap-3">
                    <Skeleton.Input active className="skeloton_input" style={{ width: "80px", height: "30px" }} />
                    <Skeleton.Input active className="skeloton_input" style={{ width: "80px", height: "30px" }} />
                    <Skeleton.Input active className="skeloton_input" style={{ width: "70px", height: "30px" }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <Skeleton.Input active className="skeloton_input" style={{ width: "150x", height: "30px" }} />
                    <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <Skeleton.Input active className="skeloton_input" style={{ width: "150x", height: "30px" }} />
                    <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
                  </div>
                  <div className="flex items-center gap-3 justify-between">
                    <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
                    <div className="flex items-center gap-3">
                      <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
                      <Skeleton.Input active className="skeloton_input" style={{ width: "50", height: "30px" }} />
                    </div>

                  </div>
                </div>

              </div>

              :
              <div className="container flex items-start gap-10">
                <div className="overflow-hidden shrink-0 bg-zinc-300">

                  <img
                    className="w-[500px] h-[550px] object-contain miz-blend-multiply  rounded transition scale-95 hover:scale-100"
                    src={data.image}
                    alt={data.name}
                  />
                </div>

                <div className="flex flex-col items-start justify-between w-full">
                  <div className="w-full">
                    <span className=" text-zinc-800 text-3xl font-medium ">
                      {data.name}
                    </span>

                    <div className="flex items-center gap-5 w-full mt-5">
                      <div className="flex items-center gap-1">
                        <AiFillStar className="fill-amber-500" />
                        <AiFillStar className="fill-amber-500" />
                        <AiFillStar className="fill-amber-500" />
                        <AiFillStar className="fill-amber-500" />
                        <AiOutlineStar className="fill-amber-500" />
                      </div>
                      <span className=" text-neutral-300 text-base font-normal ">
                        {data.numReviews} reviews
                      </span>
                      <span className=" text-sky-400 text-base font-normal ">
                        Submit a review
                      </span>
                    </div>


                    <div className=" border-y-2 border-neutral-200 w-full py-5 mt-5">
                      <div className="flex items-center gap-2">
                        <span className="text-sky-400 text-2xl font-bold  leading-9 tracking-wide">
                          ${(data.price - (data.price * 24) / 100).toFixed(2)}
                        </span>
                        <span className="text-slate-400 text-lg font-normal  line-through leading-[21px] tracking-wide">
                          ${data.price}
                        </span>
                        <span className="text-rose-400 text-base font-bold  leading-[21px] tracking-wide">
                          24% Off
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-16 mt-5">
                      <div className="flex flex-col gap-3">
                        <span className=" text-neutral-800 text-base font-normal ">
                          <b>Availability:</b>{" "}
                          {data.isFeatured ? "Available" : "Not Available"}
                        </span>
                        <span className=" text-neutral-800 text-base font-normal ">
                          <b>Brand:</b> {data.brand}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className=" text-neutral-800 text-base font-normal ">
                          <b>In Stock:</b> {data.countInStock}
                        </span>
                        <span className="flex items-center gap-2 text-neutral-800 text-base font-normal ">
                          <b>Free Shipping</b>
                          <FcCheckmark />
                        </span>
                      </div>
                    </div>

                    <div className="mt-20 flex items-center justify-between border-y-2 border-neutral-200 w-full py-5">
                      <div className="flex items-center">
                        <button
                          className="p-3 text-xl bg-sky-400 text-white rounded-lg"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <strong className="px-3 text-2xl">{count}</strong>
                        <button
                          className="p-3 text-xl bg-sky-400 text-white rounded-lg"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                      <Button
                        onClick={() => handleAddToCart(data, count)}
                        className=" px-7 py-3 items-center gap-5 bg-sky-100 active:bg-sky-200 rounded-md outline-none transition"
                      >
                        <span className="text-sky-400 text-[18px] flex items-center gap-3 px-[40px]">
                          {" "}
                          Add to cart{" "}
                        </span>
                      </Button>
                    </div>
                    <div className="mt-8 flex items-center gap-4 justify-between">
                      <button className="flex items-center justify-center w-full gap-3 bg-[#385C8E] text-[#fff] py-4  active:bg-[#476389] rounded-md outline-none transition"><img src={facebook} alt="facebook" />Share on Facebook</button>
                      <button className="flex items-center justify-center w-full gap-3 bg-[#03A9F4] text-[#fff] py-4  active:bg-[#48616c] rounded-md outline-none transition"><img src={twitter} alt="twitter" />Share on Twitter</button>
                    </div>
                  </div>
                </div>
              </div>

          }
          <div className="w-full mt-12 bg-[#FAFAFB] pt-8 pb-16 pl-9 rounded-xl flex flex-col gap-4">
            <h2 className="text-blue-500 text-lg mb-3">
              Product Infomation
            </h2>
            <div className="w-full max-w-[200px] h-[5px] bg-[#2E90E5]"></div>
            <p className="text-slate-400 text-xs mt-8">{data.richDescription}{data.richDescription}</p>
            <p className="text-slate-400 text-xs mt-8">{data.richDescription}{data.richDescription}</p>
            <p className="text-slate-400 text-xs mt-8">{data.richDescription}{data.richDescription}</p>
          </div>
        </div>
        <MostProducts />
      </Container>

      <Footer />
    </div>
  );
};

export default SingleProducts;