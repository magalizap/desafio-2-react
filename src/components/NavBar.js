import React from 'react'
import CartWidget from './CartWidget'


export const NavBar = ({cart}) => {
  return (
      <nav className='teal darken-4'>
          <div className="nav-wrapper">
            <a href="../App.js" className="brand-logo">Clothes</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Shop</a>
              </li>
              <li>
                <a href="badges.html">Nosotros</a>
              </li>
              <li>
                <a href="collapsible.html">Contacto</a>
              </li>
              <li className='flex'>
                <CartWidget/>
                <p>{cart}</p>
              </li>
            </ul>
          </div>
      </nav>  
  )
}

        

export default NavBar