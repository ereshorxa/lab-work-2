import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <section className="narrow-page">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <div className="empty-box">
          <p>Корзина пока пустая.</p>
          <Link className="action-link" to="/">Перейти в каталог</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product) => (
              <div className="cart-row" key={product.cartId}>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.price.toLocaleString('ru-RU')} ₽</p>
                </div>
                <button onClick={() => removeFromCart(product.cartId)}>Удалить</button>
              </div>
            ))}
          </div>
          <p className="total">Итого: {total.toLocaleString('ru-RU')} ₽</p>
        </>
      )}
    </section>
  )
}

export default CartPage
