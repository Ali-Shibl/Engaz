import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import style from './Navbar.module.css'
import { Auth } from '../../Context/UserLogin';

export default function Navbar() {

  const { UserIsLogin, setUserIsLogin } = useContext(Auth)
  const [show, setshow] = useState(false)

  const dataUser = JSON.parse(localStorage.getItem('dataUser'))

  let navigate = useNavigate()

  function logout() {
    localStorage.removeItem("Token");
  localStorage.removeItem("dataUser");
  setUserIsLogin(false);
  navigate('/login');

  }

  return (
    <>


      {/* nav  */}
      <nav className='nav  position-sticky top-0 z-3 p-3 bg-white  '>
        <div className="container d-flex  justify-content-between align-items-center ">

          <div className='d-flex align-items-center'>
            <p className={`mb-0 ${style.logo}`}>AMALY</p>

            {/* inputSearch */}
            {UserIsLogin ?
              <>
                <div className={`${style.fromNav} position-relative  d-none d-lg-block`}>

                  <input type="text" className='w-100 py-2 ps-5 rounded-5' placeholder='Search' aria-label="Search" />
                  <span className={` position-absolute top-50 translate-middle-y ${style.iconSearch}`}> <i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div className='ms-lg-4 mx-3 position-relative  d-block d-lg-none'>
                  <p className='m-0 curser' onClick={() => { setshow(!show) }}>

                    <div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center me-1`}>
                      <i className="fa-solid fa-magnifying-glass" aria-label="Search"></i>
                    </div>

                  </p>

                  <div className={` position-absolute ${show ? '' : 'searchMobile'} transitionY `}>
                    <input type="text" className=' py-2 ps-5 rounded-5' placeholder='Search' />
                    <span className={` position-absolute top-50 translate-middle-y ${style.iconSearch}`}> <i className="fa-solid fa-magnifying-glass"></i></span>
                  </div>

                </div>
              </>

              : ''}

          </div>

          {UserIsLogin ?
            <>
              <div className='d-flex align-items-center '>




                <div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center`}><i className="fa-brands fa-rocketchat "></i></div>


                <div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>
                <div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center me-1`}><i className="fa-solid fa-ghost  "></i></div>

                <Menu menuButton={<MenuButton className={` d-flex gap-2 align-items-center border-0 bg-transparent `}>
                  <div className={`rounded-circle border d-flex justify-content-center align-items-center ${style.person}`}>
                    <img src={dataUser.photo ? dataUser.photo : ''} alt={dataUser.name} className='w-100 rounded-circle' />
                  </div>
                  <div className='text-start text-person d-none d-md-block'>
                    <p className='m-0 p-0 lh-1 fw-bold'>{dataUser.name} <i className="fa-solid fa-chevron-down ms-2"></i></p>
                    <p className='m-0 p-0 text-muted'>{dataUser.email}</p>
                  </div>
                </MenuButton>}
                  direction={'bottom'}
                  align={'end'}
                  gap={10}
                  transition>
                  <MenuItem><Link to={'/account'} className='nav-link m-0 p-0 text-dark'><i className="fa-regular fa-user me-2"></i> Manage My Account</Link></MenuItem>
                  <MenuItem><p className='mb-0'><i className="fa-regular fa-circle-xmark me-2"></i>notification</p></MenuItem>
                  <MenuItem><p className='mb-0'><i className="fa-regular fa-star me-2"></i> My Reviews</p></MenuItem>
                  <MenuItem><p onClick={logout} className='mb-0 w-100'><i className="fa-solid fa-right-from-bracket me-2"></i> Logout</p></MenuItem>

                </Menu>





              </div>

            </>

            : ""}




        </div>
      </nav>


    </>
  )
}
