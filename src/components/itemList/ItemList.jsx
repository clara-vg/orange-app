import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map(product => (
          <Item product= {product} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
