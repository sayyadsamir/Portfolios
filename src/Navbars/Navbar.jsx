import React from 'react'
import { Link } from 'react-router-dom'
import Navbars from './Navbars.css'

function Navbar() {
  return (
    <div>
      <div className='body'>
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-6 col-lg-12 col-sm-4">
              <ul>
              <span className='icon'>Samir Sayyad</span>
                <li>
                  <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                  <Link className='link' to='/about'>About</Link>
                </li>
                <li>
                  <Link className='link' to='/skills'>Skills</Link>
                </li>
                <li>
                  <Link className='link' to='/project'>Project</Link>
                </li>
                <li>
                  <Link className='link' to='/contact'>Contact</Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
