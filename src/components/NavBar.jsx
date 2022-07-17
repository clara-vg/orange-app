import CartWidget from "./cartwidget/CartWidget"

const NavBar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-orange-700 p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="font-semibold text-xl tracking-tight">ORANGE</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <a href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
                        GALERIA
                    </a>
                    <a href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
                    SHOP
                    </a>
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