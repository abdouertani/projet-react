import React from 'react'
import './navbar.css'
import {Routes , Route, NavLink, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Order from './Order'




const Navbar = () => {
  return (
   <div>
     <div className='nav'>
          <ul className='navlist'>
            
             <NavLink to={'/'}>Home</NavLink>
             <NavLink to={'/Order'}>Order</NavLink>
             <NavLink to={'/menu'}>menu</NavLink>
             <NavLink to={'/Contact'}>Contact</NavLink>
             <NavLink to={'/About'}>About</NavLink>
          </ul>
          <ul className='logsign'>
          <NavLink to={'/Login'}><i class="fa-solid fa-user"></i>Login</NavLink>
          <NavLink to={'/Signup'}><i class="fa-solid fa-user-plus"></i>Sign up</NavLink>
          </ul>
          
    </div>
    <Routes>
             <Route path={'/'} element={<Home></Home>}></Route>
             <Route path={'/Menu'} element={<Menu></Menu>}></Route>
             <Route path={'/Order'} element={<Order></Order>}></Route>
             <Route path={'/Contact'} element={<About></About>}></Route>
             <Route path={'/About'} element={<Contact></Contact>}></Route>
   </Routes>

   </div>
  )
}

export default Navbar