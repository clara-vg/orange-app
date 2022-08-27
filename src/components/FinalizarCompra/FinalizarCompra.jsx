import "./FinalizarCompra.css"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const FinalizarCompra = () => {

    const { cart, limpiarCarrito, getFinalPrice, getQuantity} = useContext(CartContext);
    const [idCompra, setIdCompra] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        lasname: "",
        phone: "",
        email:"",
    })

    const compraDate = new Date().toLocaleDateString()

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name] : e.target.value})
    }

    function compraHandler(){
        const compra = {
            buyer,
            item: cart,
            price: getQuantity(),
            date: compraDate,
        }
        saveToFirestore(compra)
    }

        const saveToFirestore = (compra) => {
            const db = getFirestore ()
            const compraCollection = collection (db, "compra")

            addDoc(compraCollection, compra).then (data => {
                setIdCompra (data.id)
            })
        }

  return (
    <>
      <div className="flex items-center justify-center px-16 pt-10 xl:max-w-7xl xl:mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="mb-6 text-2xl tracking-wide text-gray-800 uppercase font-boogaloo">
            Resúmen de tu compra
          </h1>
          <div className="flex flex-col items-start justify-start w-full lg:flex-row">
            <div className="flex flex-col self-start w-full mr-6 md:w-1/2">
              <h2 className="text-xl tracking-wide text-gray-800 font-boogaloo">Estos son los productos en tu carrito</h2>
              <div className='flex flex-col p-4 mt-6 text-xl bg-gray-200 border'>
                <div className="flex flex-row justify-between tracking-wide font-amastic">
                  <p>Cantidad de items:</p>
                  <p className="text-lg font-semibold">{getQuantity()}</p>
                </div>
                <div className="flex flex-row justify-between tracking-wide font-amastic ">
                  <p>¡El envío es gratis!</p>
                </div>
                <div className="flex flex-row justify-between mt-2 text-xl font-semibold font-shadows">
                  <p>Total:</p>
                  <p>${getFinalPrice()}</p>
                </div>
              </div>
              <Link
                to="/cart" className="flex flex-row items-center mt-3 tracking-wider font-boogaloo">
                Volver al Carrito.
              </Link>
            </div>

            <div className="flex flex-col items-start justify-start w-full mt-6 mb-3 lg:mt-0">

              <form className="w-full space-y-6">
                <h2 className="text-base tracking-wide font-boogaloo">Completa los siguientes datos así te hacemos llegar la Factura de tu Compra</h2>
                <input
                  className="w-full px-2 py-4 placeholder-gray-600 border border-gray-200 focus:outline-none focus:ring-white font-shadows focus:border-red-200 "
                  id="name"
                  type="text"
                  name="name"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Aquí tu nombre"
                />
                <input
                  className="w-full px-2 py-4 placeholder-gray-600 border border-gray-200 focus:outline-none focus:ring-white font-shadows focus:border-red-200 "
                  id="surname"
                  type="text"
                  name="lastname"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Aquí tu pellido"
                />
                <input
                  className="w-full px-2 py-4 placeholder-gray-600 border border-gray-200 focus:outline-none focus:ring-white font-shadows focus:border-red-200 "
                  id="phone"
                  type="phone"
                  name="phone"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Aquí tu número de Teléfono"
                />
                <input
                  className="w-full px-2 py-4 placeholder-gray-600 border border-gray-200 focus:outline-none focus:ring-white font-shadows focus:border-red-200 "
                  id="email"
                  type="email"
                  name="email"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Dejanos tu E-mail"
                />
              </form>

              {buyer.name && buyer.lastname && buyer.phone && buyer.email
              ? ( 
              <input
                onClick={() => {
                  compraHandler();
                  setShowModal(true)
                }}
                className='w-full px-4 py-2 my-4 text-lg tracking-widest text-center text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none font-shadows'
                type="submit"
                value="Realizar Compra "
              />
            ) : ( 
              <input
                className='w-full px-4 py-2 text-lg tracking-widest text-center text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none font-shadows'
                type="submit"
                value="Completa tus datos"
                disabled
              />
              )
            }
            </div>
          </div>
        </div>
      </div>

     
      <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-orange-300`}>
        <div className="containerModal">
          <div className="textoModal"> 
            <h2>
              ¡Muchas gracias {buyer.name.toUpperCase()} por tu compra. 
            </h2>
            <p className="textoModal">
              Te vamos a enviar un mail a {buyer.email.toLowerCase()} con tu orden de
              compra ID: {idCompra}. En breve vas a estar disfrutándola! Esperamos que  vuelvas a visitarnos muy pronto! 
            </p>
            <Link to="/" className="flex justify-center mt-6">
              <button
                onClick={limpiarCarrito}
                className="w-40 py-4 text-center text-white bg-orange-300 rounded-lg cursor-pointer focus:outline-none focus:ring-transparent, tracking-widest font-boogaloo uppercase"
              >
                Volver a la pagina principal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinalizarCompra
