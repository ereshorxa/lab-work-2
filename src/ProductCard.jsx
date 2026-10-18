import { useNavigate } from 'react-router-dom'
import { useCart } from './context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  function handleAdd() {
    addToCart(product)
    navigate('/cart')
  }

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h2>{product.name}</h2>
      <p className="price">{product.price.toLocaleString('ru-RU')} ₽</p>
      <button onClick={handleAdd}>В корзину</button>
    </article>
  )
}

export default ProductCard
