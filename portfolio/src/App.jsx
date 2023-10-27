import { useState } from 'react'
import Sidenav from './Components/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Sidenav />
    </div>
  )
}

export default App
