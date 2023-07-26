import React from 'react'
import TopNav from './component/TopNav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Other from './pages/Other';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <TopNav/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/service'element={<Service/>}/>
        <Route path='other/'element={<Other/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
