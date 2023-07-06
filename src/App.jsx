import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenido, aqui comienza tu nuevo sitio web</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +uno {count}
        </button>
        <p>
          Este es un sitio web reactivo.
        </p>
      </div>
      
    </>
  )
}

export default App
