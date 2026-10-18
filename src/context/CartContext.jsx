/* oxlint-disable react/only-export-components */
import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  if (action.type === 'add') {
    return [...state, { ...action.product, cartId: `${action.product.id}-${Date.now()}-${Math.random()}` }]
  }

  if (action.type === 'remove') {
    return state.filter((product) => product.cartId !== action.cartId)
  }

  return state
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])
  const addToCart = (product) => dispatch({ type: 'add', product })
  const removeFromCart = (cartId) => dispatch({ type: 'remove', cartId })

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
