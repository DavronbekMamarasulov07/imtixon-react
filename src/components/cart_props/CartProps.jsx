import { BiPlus } from "react-icons/bi"; 
import { BiMinus } from "react-icons/bi"; 
import { RxCross2 } from "react-icons/rx";
import { REMOVE_FROM_CART } from "../../action_types/ActionTypes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartProps = ({ product, dispatch }) => {
    const [newCount , setNewCount] = useState(0);
    const navigate = useNavigate();
    

    let price = product.price 
    let count = product.count
    const subPrice = (((price * count * 24) / 100)* (count + newCount)).toFixed(2)

    const handleDecrement = () => {
        if (newCount > 1) {
            setNewCount(newCount - 1);
        } else if (newCount  === product.count ) {
            toast.error("You can't add less than 3");
        }
    };
    
    console.log(product.count)
    const handleIncrement = () => {
        if (newCount < product.countInStock) {
            setNewCount(newCount + 1);
        } else {
            toast.error("You can't add more than stock");
        }
    };

  


    return (
        <tr  className='w-full border-b'>
            <td className=" max-w-[50px] ml-3 "><button onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: product.id })} className="cursor-pointer w-8 h-8  flex items-center justify-center bg-gray-100 rounded-full "><RxCross2 className="  text-red-400 " /></button></td>
            <td className='w-full py-12 px-14 text-[#262626]'>
                <div className="flex items-center gap-6 ">
                    <div className="bg-gray-100 px-2 rounded-lg py-3">
                        <img 
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-16 object-cover"
                        />
                    </div>
                    <p className="text-lg font-semibold">{product.name}</p>
                </div>
            </td>
            <td className='w-full py-12 px-14 text-[#262626]'>
                <p className="text-lg font-semibold">{subPrice}$</p>
            </td>
            <td className='w-full py-16 px-14 text-[#262626] '>
                <div className="flex items-center gap-4 px-6 py-2 bg-slate-100 rounded-lg">
                    <button onClick={handleDecrement}><BiMinus className="text-sky-400" /></button>
                    {product.count + newCount}
                    <button onClick={handleIncrement}><BiPlus className="text-sky-400"/></button>
                </div>
            </td>
            <td className='w-full py-12 px-14 text-[#262626]'>
                <p className="text-lg font-semibold"><span className="text-rose-400 line-through mr-2">{product.price}$</span>{((product.price * product.count * 24) / 100) }$</p>
            </td>
        </tr>
    )
}

export default CartProps
