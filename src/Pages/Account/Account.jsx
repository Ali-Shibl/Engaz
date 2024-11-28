import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

export default function Account() {

  const TokenUser = JSON.parse(localStorage.getItem('dataUser'))

  let { name, photo, email } = TokenUser


  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name}</title>
        <meta name="description" content="profilePage" />
      </Helmet>

      <div className='py-5'>
        <div className="container">
          <div className='d-flex flex-column flex-sm-row justify-content-between align-items-sm-center align-items-start'>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
                <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>My Account</a></li>
              </ol>
            </nav>
            <p className='mb-0 mt-3 mt-sm-0'>Welcome <span className='text-orange'>{name} </span></p>

          </div>

          <div className='row mt-5'>

            <div className="col-sm-4 col-xl-3">
              <img src={photo} alt={`${name}'s profile`} className='w-100' />
            </div>
            <div className="col-sm-8 col-xl-9">
              <p className='my-2 mt-md-0'><span className='text-orange '>Name : </span>{name}</p>
              <p><span className='text-orange'>Email : </span>{email}</p>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}
