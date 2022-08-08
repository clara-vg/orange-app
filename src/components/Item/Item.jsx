import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
    <div className="grid place-items-center py-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-300">
            <img className="w-full" src= {product.img} alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> {product.name} </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-gray-200 hover:bg-white text-gray-700 font-bold py-2 px-4 rounded-full">
                <Link to={`/detail/${product.id}`} > Ver detalle </Link>
                </button>
            </div>
        </div> 
    </div>
    )   
   }

   export default Item

