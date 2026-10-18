import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (name.trim()) navigate('/dashboard')
  }

  return (
    <section className="narrow-page">
      <h1>Вход</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Введите имя</label>
        <input id="name" value={name} onChange={(event) => setName(event.target.value)} required />
        <button type="submit">Войти</button>
      </form>
    </section>
  )
}

export default LoginPage
