import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to={"/"}>Will be Watched</Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to={"/watched"}>Watched</Link>
                    </li>
                    <li>
                        <Link to={"/add"} className='btn'>
                            <i className='fas fa-plus'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
