
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './component/RegistrationForm'
import CreateSocietyForm from './component/CreateSocietyForm'

function App() {
  

  return (
    <>
     
     <Routes>
      <Route path='/' element={<RegistrationForm/>} />
      <Route path='/createSociety' element={<CreateSocietyForm/>} />
     </Routes>
    
    </>
  )
}

export default App
