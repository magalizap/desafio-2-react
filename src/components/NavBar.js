import React from 'react'

export const NavBar = () => {
  return (
      <nav className='teal darken-4'>
          <div class="nav-wrapper">
            <a href="#" className="brand-logo">Clothes</a>
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
            </ul>
          </div>
      </nav>  
  )
}

        

export default NavBar