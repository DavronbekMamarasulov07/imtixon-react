import React from "react";

import {CartsPromp} from "../carts_promp/CartsPromp";

import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "antd";

const MostProducts = () => {
  const [data,loading] = useFetch("/products");

  data.sort((a, b) => b.rating - a.rating);

  return (
    <div className="mt-[50px] mb-[150px] ">
      <div className="container flex flex-col items-center justify-center gap-20 ">
        <span className="text-zinc-800 text-[35px] font-semibold ">
          MOST TOP RATED PRODUCTS
        </span>
        <div className=" flex  justify-between gap-8 w-full  ">
          {
          
          loading ? 
          
          
          Array.from({ length: 3 }).map((_, index) => (
            <div className="flex gap-5 items-center" key={index}>
                 <div ><Skeleton.Image active style={{ width: "230px" , height: "230px"}} /></div>
                 <div className="flex flex-col gap-5">
                 <Skeleton.Input active className="skeloton_input"  style={ {width: "180px", height: "40px"} }  />
                 <Skeleton.Input active className="skeloton_input"  style={ {width: "130px", height: "40px"} } />
                 <Skeleton.Input active className="skeloton_input"  style={ {width: "180px", height: "40px"} } />
                 </div>

            </div>
        ))


          
          :
          
          data.slice(0, 3).map((product) => (
            <CartsPromp key={product.id} data={product} cartType={"horizontal"}
            />
          ))
          
          
          
          }
        </div>
      </div>
    </div>
  );
};

export default MostProducts;
