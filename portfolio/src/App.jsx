import { useState } from 'react'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'
import Work from './Components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Sidenav />
    <Main />
    <Work />
    </div>
    
  )
}

export default App
