const NavBar = () => {
  return (
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-semibold text-xl tracking-tight">ORANGE</span>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4">
                        GALERIA
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4">
                        SHOP
                    </a>
                    </div>
                    <div>
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Carrito</a>
                    </div>
                </div>
        </nav>
    </div>
  )
}
export default NavBar