import { Link } from 'react-router-dom'

function DashboardPage() {
  return (
    <section className="narrow-page dashboard">
      <h1>Личный кабинет</h1>
      <p>Вход выполнен успешно!</p>
      <Link className="action-link" to="/">Вернуться к покупкам</Link>
    </section>
  )
}

export default DashboardPage
