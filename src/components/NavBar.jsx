import CartWidget from "./cartwidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-orange-700 p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <Link to={'/'} className=" font-semibold text-xl tracking-tight">ORANGE</Link>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <Link to='/category/galeria' href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
                      <b>
                        GALERIA
                        </b>
                    </Link>
                    <Link to='/category/cuadros' href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
                      <b>
                    CUADROS
                      </b>
                    </Link>
                    </div>
                    <div>
                    <CartWidget />
                    </div>
                </div>
        </nav>
    </div>
  )
}
export default NavBar