
import { useContext, useState } from 'react';
import AppContext from '../../context/store';
import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from 'antd';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Container from '../../components/container/Container';
import { Link } from 'react-router-dom';
import CartProps from "../../components/cart_props/CartProps";

const Cart = () => {
  const [state, dispatch] = useContext(AppContext);
  

  return (
    <div>
      <Nav />
      <Container>
        <div className='mt-24 py-5 w-full flex items-center justify-center gap-1 text-lg'>
          <Link to="/" className='text-sky-600'> Home </Link>
          <span> /  Cart</span>
        </div>
        <div className="wrapper flex flex-col gap-3 items-end justify-start">
          <table className='w-full border-b mb-[100px]'>
            <thead>
              <tr className='whitespace-nowrap border-b'>
                <th className='text-left py-12 px-3'></th>
                <th className='text-left py-12 px-14'>PRODUCT</th>
                <th className='text-left py-12 px-14'>PRICE</th>
                <th className='text-left py-12 px-14'>QTY</th>
                <th className='text-left py-12 px-14'>UNIT PRICE</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {state === null ? <Skeleton /> : state?.map((product) => (
                <CartProps product={product} key={uuidv4()} dispatch={dispatch}  />
              ))}
            </tbody>
          </table>

          {
            state.map((product) => (
              <div className="w-full flex flex-col gap-3 max-w-[500px] mb-[150px]">

                <div className="flex items-center justify-between w-full">
                  <span className="">
                    Subtotal
                  </span>
                  <span className="text-2xl">
                    ${product.price * product.count}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full">
                  <span className="">
                    Shipping Fee
                  </span>
                  <span className="text-2xl">
                    $20
                  </span>
                </div>

                <div className="flex items-center justify-between w-full border-b pb-5" >
                  <span className="">
                    Coupon
                  </span>
                  <span className="text-xl">
                    No
                  </span>
                </div>
                <div className='flex items-center justify-between w-full mt-5'>
                  <span className='text-3xl font-medium tracking-normal'>Total </span>
                  <span className='text-2xl'>${product.price * product.count + 20} </span>
                </div>
                <button className='text-white bg-sky-500 px-5 py-4 rounded-lg text-lg'>Check out</button>

              </div>
            ))
          }
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
