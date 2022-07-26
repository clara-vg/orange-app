const Item = ( {product} ) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <li key={product.id}> {product.category} </li>
            <img className="w-full" src= {product.img} alt="" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> {product.name} </div>
                <p className="text-gray-700 text-base">
                    {product.description}
                </p>
            </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <b> ${product.price}</b> </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <b> Stock: {product.stock} </b></span>
            <button className="bg-gray-200 hover:bg-white text-gray-700 font-bold py-2 px-4 rounded-full">
                Ver detalle
            </button>
        </div>
    </div>

    )   
   }

   export default Item