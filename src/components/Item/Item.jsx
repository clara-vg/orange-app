const Item = ( {product} ) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full" src= {product.img} alt="" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> {product.name} </div>
            </div>
        <div className="px-6 pt-4 pb-2">
            <button className="bg-gray-200 hover:bg-white text-gray-700 font-bold py-2 px-4 rounded-full">
                Ver detalle
            </button>
        </div>
    </div>

    )   
   }

   export default Item

