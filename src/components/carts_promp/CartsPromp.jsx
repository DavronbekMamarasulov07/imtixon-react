import { AiOutlineEye } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './CartsPromp.css'
import { Link } from "react-router-dom";
import { useState } from "react";

const CartsPromp = ({ data, cartType }) => {
    const [like, setLike] = useState(false);
    const [toCart, setToCart] = useState(false)
    function starsFunc(numString) {
        if (numString > 5) {
            numString = 5
        }
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
                <span className="text-sm">({numString}/5)</span>
            </div>
        );
    }
    return (
        <div className=
            {
                cartType === "horizontal" ? " transition p-4   bg-zinc-300 rounded-md hover:shadow-lg gap-5 flex items-center " :
                    " cart_item transition w-[300px]  bg-zinc-300 rounded-md hover:shadow-lg"
            }
        >
            <div className="cart_img_content overflow-hidden relative flex items-center justify-center p-5">
                <div className='cart_img_box'>
                    <img
                        className="cart_img transition rounded-md object-contain  w-full max-w-[270px] h-[235px] mix-blend-multiply"
                        src={data.image}
                        alt="product_image"
                    />
                </div>
                {
                    cartType === "horizontal" ? null :
                        <div className='cart_hover bg-white text-black p-4 w-full max-w-[270px] h-[240px] flex items-center justify-center'>
                            <span onClick={() => setLike(!like)} className='like_icon cart_icons'>

                                {
                                    like ? <span className="fill_icon"><AiFillHeart /></span> : <AiOutlineHeart />
                                }


                            </span>
                            <Link to={`/single-products/${data.id}`}> 
                                <span className='basket_icon cart_icons'>
                                     <AiOutlineEye />
                                </span>
                            </Link>
                        </div>
                }

            </div>

            <Link to={`/single-products/${data.id}`}>
                <div className="flex flex-col items-center justify-center gap-2 pt-2 pb-5">
                    <span className=" text-blue-950 text-lg font-bold  leading-[27px] tracking-wide">
                        {data.name}
                    </span>
                    {starsFunc(data.rating)}
                    <div className="flex items-center gap-2">
                        <span className="text-sky-400 text-lg font-bold  leading-loose tracking-wide">
                            ${(data.price - (data.price * 24) / 100).toFixed(2)}
                        </span>
                        <span className="text-slate-400 text-sm font-normal  line-through leading-[21px] tracking-wide">
                            ${data.price}
                        </span>
                        {
                            cartType === "horizontal" ? null : <span className="text-slate-400 text-sm font-normal  leading-[21px] tracking-wide">24% off</span>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { CartsPromp }
