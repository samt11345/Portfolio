import { useState } from 'react'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'
import Work from './Components/Work'
import projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Sidenav />
    <Main />
    <Work />
    <projects />
    </div>
    
  )
}

export default App
