import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to={"/"}>İzlənəcək filmlər</Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to={"/watched"}>İzlənən filmlər</Link>
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
