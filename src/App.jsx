
import { useState } from 'react'
import './App.css'
import DualEffectComponent from './components/DualEffectComponent'
import PageTitle from './components/PageTitle'

function App() {
  const [title,setTitle] = useState('')

  return (
    <>
    <DualEffectComponent/>
    <PageTitle title = {title}/>
    <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)}/>
    </>
    
  )
}

export default App
