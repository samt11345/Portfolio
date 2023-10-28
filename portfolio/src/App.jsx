import { useState } from 'react'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Sidenav />
    <Main />
    </div>
  )
}

export default App
