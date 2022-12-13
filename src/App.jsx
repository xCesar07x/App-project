import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Aboutme from './components/About-me'
import Hobbies from './components/Hobbies'
import Freetime from './components/Free-time'
import Favoritefood from './components/favorite-food'
import Mystack from './components/My-stack'

function App() {
  const [count, setCount] = useState(0)

  // const oneClick = () => {
  //  alert("Hola Mundo")
  // }

  // const me = {
  //   name: "Cesar",
  //   movie: "Dead Pool",
  //   music: "regueton"
  // }

  return (
    <div className="App">

      <div>
        <Aboutme />
      </div>
      <div>
        <Hobbies />
      </div>
      <div>
        <Freetime />
      </div>
      <div>
        <Favoritefood />
      </div>
      <div>
        <Mystack />
      </div>
      
    </div>
    
    
  )
}

export default App
