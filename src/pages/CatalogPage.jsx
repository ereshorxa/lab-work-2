import ProductCard from '../ProductCard'

const products = [
  { id: 1, name: 'Игровая мышь', price: 3490, image: '/device.svg' },
  { id: 2, name: 'Механическая клавиатура', price: 6990, image: '/device.svg' },
  { id: 3, name: 'Игровые наушники', price: 4590, image: '/device.svg' },
  { id: 4, name: 'Геймпад', price: 3990, image: '/device.svg' },
  { id: 5, name: 'Игровой микрофон', price: 5490, image: '/device.svg' },
]

function CatalogPage() {
  return (
    <section>
      <h1>Магазин игровых девайсов</h1>
      <p className="subtitle">Выбери всё необходимое для игры</p>
      <div className="products">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  )
}

export default CatalogPage
