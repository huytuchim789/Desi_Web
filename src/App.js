import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import './App.css'

function App() {
  return (
    <Routes>
      {routes.map((r) => {
        return <Route path={r.path} element={r.element}></Route>
      })}
    </Routes>
  )
}

export default App
