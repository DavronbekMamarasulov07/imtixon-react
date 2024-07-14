import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch'
import { CartsPromp } from '../carts_promp/CartsPromp'
import Container from '../container/Container'
import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from 'antd';

const AllProducts = () => {

  const [cart, setCart] = useState(1)
  const [products, loading] = useFetch('/products')

  let count = 4

  return (
    <Container>
      <div className="text-zinc-800 text-[35px] font-semibold text-center mb-20 mt-40">ALL PRODUCTS</div>
      <div className='flex flex-wrap gap-[53px]'>
        {
          loading 
            ?
            Array.from({ length: 4 }).map((_, index) => (
              <div className="flex flex-col gap-5 items-center" key={index}>
                   <Skeleton.Image active style={{ width: "300px" , height: "300px"}} />
                   <Skeleton.Input active className="skeloton_input"  style={ {width: "250px", height: "30px"} }  />
                   <Skeleton.Input active className="skeloton_input"  style={ {width: "200px", height: "20px"} } />
                   <Skeleton.Input active className="skeloton_input"  style={ {width: "250px", height: "20px"} } />

              </div>
          ))
            : 
            products.slice(0, count * cart).map((product) => (
              <CartsPromp key={uuidv4()} data={product} cartType={"vertical"} />
            ))
        }
      </div>
      <button onClick={() => setCart(cart + 1)} className="text-sky-400 text-xl font-medium m-auto mt-8 mb-20 border-b-2 block  border-sky-400">LOAD MORE</button>
    </Container>
  )
}

export default AllProducts
