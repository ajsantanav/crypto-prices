import React from 'react'
import {Link} from 'react-router'
function Nav() {
    return (
      <div className='nav'>
          <Link to='/'>
              <div>CRYPTOPRICES</div>
          </Link>
          <Link to='/currencies'>
              <div>CURRENCIES</div>
          </Link>
      </div>
    )
  }

export default Nav