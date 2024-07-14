import { FaRegUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import logo from '../../images/logo.svg'
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/store";

const Nav = () => {
  const [state, dispatch] = useContext(AppContext)
  const [productsInCart, setProductsInCart] = useState([]);
  console.log(state)

  useEffect(() => {
    setProductsInCart( state?.map((product) => product.count || 0)?.reduce((a, b) => a + b, 0)
  )
  }, [state.count])


  return (
    <nav className="bg-[#ffffff29] fixed top-0 left-0 w-full z-10 backdrop-blur-3xl">
      <Container>
        <ul className="flex justify-between items-center py-7 ">
          <li className="text-neutral-800 text-xl font-normal flex items-center gap-2"><FaRegUser /><Link to="/auth">My profile</Link></li>
          <li><Link to="/"><img src={logo} alt="logo" /></Link></li>
          <Link to="/cart" className="relative">
          <li className="text-neutral-800 text-xl font-normal flex items-center gap-2 relative">
            <SlBasket />
                <div className="w-5 h-5 bg-rose-400 rounded-full border-2 border-white absolute -top-2 -right-3 flex justify-center items-center " >

                <div className="text-center text-white text-[10px] font-bold  leading-[15px] tracking-wide"> {productsInCart} </div>
            </div>
          </li>
              </Link>
        </ul>
      </Container>
    </nav>
  )
}

export default Nav
