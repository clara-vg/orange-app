const ItemDetail = ( props ) => {
    const {name, img, description, price, stock} = props
  return (
    <div className="grid place-items-center py-6">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src= {img} alt="" />
            </figure>
        <div className="card-body">
            <h2 className="card-title text-gray-900 font-bold text-xl mb-2">
            {name} 
            </h2>
            <div className="badge badge-secondary">
                <p><b> 
                    Stock: {stock} 
                </b></p>
            </div>
            <p> {description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        <strong> ${price} </strong>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemDetail
