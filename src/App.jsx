import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Header from './components/Header';
console.log(React);
const App = () => {
  return (
    <BrowserRouter>

    <Header>
    <Routes>
      <Route path='/' element=  {<Home></Home>} />
      <Route path='/sign-in' element=  {<SignIn></SignIn>} />
      <Route path='/sign-up' element=  {<SignUp></SignUp>} />
      <Route path='/about' element=  {<About></About>} />
    
   
    </Routes>

    </Header>
    </BrowserRouter>
  )
}

export default App
