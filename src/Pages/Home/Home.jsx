import React from 'react';
import style from './Home.module.css'
import magdy from '../../assets/magd.webp'
import mokhtabr from '../../assets/mokhtabr.webp'
import Posts from '../../Components/Posts/Posts';
import { Helmet } from "react-helmet";

export default function Home() {
  const TokenUser = JSON.parse(localStorage.getItem('dataUser')) || { name: '', photo: '' };
  let { name, photo } = TokenUser

  return <>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <meta name="description" content="homePage" />
    </Helmet>

    <main className='py-3 py-lg-5'>
      <div className="row g-4 g-xl-5">
        {/* left */}

        {/* mobile */}
        <a className="bg-orange menu-mobile text-white   mb-3  d-block d-xl-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i className="fa-solid fa-bars"></i>
        </a>
        <div className="offcanvas offcanvas-start d-block d-xl-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body overflow-auto vh-100">
            <div className='text-center'>
              <img src={photo} alt={name} className={`${style.photoHome} rounded-circle`} />
              <h1 className='h6 fw-bold my-2'>{name}</h1>
              <p className='text-main mb-0'><i className="fa-classic fa-solid fa-qrcode fa-fw me-2"></i>QR code</p>

            </div>
            <div className='mt-3'>
              <p className='text-orange fw-bold mb-2'>Menu</p>
              <ul className='list-unstyled mb-5 ps-1 overflow-auto'>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>
                <li>
                  <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i className="fa-regular fa-bell "></i></div>  hnjhj</p>
                </li>


              </ul>

            </div>

          </div>
        </div>
        {/* lab */}
        <div className='col-xl-3 bg-white bg-opacity-75 rounded-3 py-4 px-3 d-none d-xl-block sidbar'>
          <div className='text-center'>
            <img src={photo} alt={name} className={`${style.photoHome} rounded-circle`} />
            <h1 className='h6 fw-bold my-2'>{name}</h1>
            <p className='text-main mb-0'><i className="fa-classic fa-solid fa-qrcode fa-fw me-2"></i>QR code</p>

          </div>
          <div className='mt-3 '>
            <p className='text-orange fw-bold mb-2'>Menu</p>
            <ul className='list-unstyled ps-1'>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-clock-rotate-left"></i></div>  Medical History</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-regular fa-heart"></i></div>  My Favorites</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-user-tie"></i></div>  My Request</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-bars"></i></div>  Training offers & Request</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-stethoscope"></i></div>  Join as Healthcare Provider</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-heart-pulse"></i></div>  My Pharmacy Orders</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-prescription-bottle-medical"></i></div>  My Surgery Orders</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-house-chimney"></i></div>  My Lab Orders</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-user-doctor"></i></div>  My Rays Orders</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-hand-holding-medical"></i></div>  Doctors Directory</p>
              </li>
              <li>
                <p className='text-muted d-flex'><div className={`${style.icons} curser rounded-circle d-flex justify-content-center align-items-center mx-2`}><i class="fa-solid fa-hand-holding-medical"></i></div>  Donate</p>
              </li>



            </ul>

          </div>

        </div>


        {/* center */}
        <div className='col-xl-6 col-md-8 '>
          <div className="row content g-2 gx-md-2">
            <div className='col-md-6  col-lg-4  '>

              <div className='shadow bg-white rounded-4 pb-3 pt-3 pt-lg-5 px-2 px-xxl-3'>
                <h1 className='text-Special  mb-2 mb-lg-4'>Special Orders</h1>
                <button className=' ms-3 py-1 px-3 bg-white rounded-5'>Go <i className="fa-solid fa-chevron-right arrow-icon "></i></button>

              </div>

            </div>
            <div className='col-md-6  col-lg-4  '>

              <div className='shadow bg-white rounded-4 pb-3 pt-3 pt-lg-5 px-2 px-xxl-3'>
                <h1 className='text-Special  mb-2 mb-lg-4'>Doctor Booking</h1>
                <button className=' ms-3 py-1 px-3 bg-white rounded-5'>Go <i className="fa-solid fa-chevron-right arrow-icon "></i></button>

              </div>

            </div>
            <div className='col-md-6  col-lg-4  '>

              <div className='shadow bg-white rounded-4 pb-3 pt-3 pt-lg-5 px-2 px-xxl-3'>
                <h1 className='text-Special  mb-2 mb-lg-4'>Online Consultation</h1>
                <button className=' ms-3 py-1 px-3 bg-white rounded-5'>Go <i className="fa-solid fa-chevron-right arrow-icon "></i></button>

              </div>

            </div>


          </div>


          <div className='shadow bg-white my-4 rounded-4 content p-3'>
            <div className='d-flex align-items-center gap-2'>
              <img src={photo} alt={name} className='rounded-circle' style={{ width: 50, height: 50 }} />

              <input type="text" className={`${style.formPost} w-100 rounded-5`} placeholder='What do you thing ?' />
            </div>
            <hr />
            <div className='upload '>
              <button className='btn-upload'><i class="fa-regular fa-image me-1"></i> Add photo</button>
              <button className='btn-upload  mx-2'><i class="fa-solid fa-video me-1"></i> Add video</button>
              <button className='btn-upload'><i class="fa-solid fa-hashtag me-1"></i> Add hashing</button>

            </div>

          </div>
          <Posts />
        </div>


        {/* right */}
        <div className='col-xl-3 col-md-4'>
          <div className="row g-4 p-2 p-md-0 flex-row flex-md-column justify-content-center ">


            <div className='col-6 col-md-12 border  bg-white bg-opacity-75 rounded-4 border-1 border-black d-flex justify-content-center align-items-center ' style={{ height: 150 }}>
              <div className='d-flex flex-column align-items-center'>
                <div className={`${style.icons}  curser rounded-circle d-flex justify-content-center align-items-center `}> <i className="fa-solid fa-plus"></i></div>
                <p className='text-orange mt-2 mb-0 fw-bold'>Add  Medical Card</p>
              </div>

            </div>

            <div className='col-6 col-md-12'>

              <div className='  d-flex flex-column gap-3 gap-lg-2 flex-lg-row justify-content-around align-items-center px-2 py-3 bg-Balance rounded-4'>
                <div>
                  <i className="fa-solid fa-money-bill me-2"></i>
                  <span className='fw-bold '>My Balance</span>
                </div>
                <div className=' text-main'>

                  <p className=' mb-0  d-flex align-items-center'><span className=' fw-bold me-2'>17000 EGP </span>


                    <div className=' d-flex justify-content-center align-items-center border border-1 border-black border-opacity-50 rounded-circle' style={{ height: 18, width: 18 }}>
                      <i className="fa-solid fa-chevron-right arrow-icon"></i>
                    </div>
                  </p>

                </div>

              </div>

            </div>

            <div className='col-12 col-md-12 rounded-4' style={{ height: 150 }}>
              <img src={mokhtabr} alt="mokhtabr" className='w-100 h-100 rounded-4' />

            </div>

            <div className='col-12 col-md-12'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='m-0 fw-bold'>My Recent Boking</p>
                <span>View all</span>
              </div>

              <div className="row g-2 mt-3 align-items-center justify-content-between">
                <div className="col-9">
                  <div className=' d-flex align-items-center  gap-2 flex-wrap'>
                    <img src={magdy} alt="magdy" className='rounded-circle' style={{ width: 50, height: 50 }} />
                    <div>
                      <p className='m-0 text'>Magdy Yaghoob</p>
                      <span className='text-muted praghraph'>Lorem ipsum dolor sit</span>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <button className='bg-btn border-0 rounded-5 '> view</button>
                </div>
              </div>
              <div className="row g-2 mt-3 align-items-center justify-content-between">
                <div className="col-9">
                  <div className=' d-flex align-items-center  gap-2 flex-wrap'>
                    <img src={magdy} alt="magdy" className='rounded-circle' style={{ width: 50, height: 50 }} />
                    <div>
                      <p className='m-0 text'>Magdy Yaghoob</p>
                      <span className='text-muted praghraph'>Lorem ipsum dolor sit</span>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <button className='bg-btn border-0 rounded-5 '> view</button>
                </div>
              </div>
              <div className="row g-2 mt-3 align-items-center justify-content-between">
                <div className="col-9">
                  <div className=' d-flex align-items-center  gap-2 flex-wrap'>
                    <img src={magdy} alt="magdy" className='rounded-circle' style={{ width: 50, height: 50 }} />
                    <div>
                      <p className='m-0 text'>Magdy Yaghoob</p>
                      <span className='text-muted praghraph'>Lorem ipsum dolor sit</span>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <button className='bg-btn border-0 rounded-5 '> view</button>
                </div>
              </div>
            </div>


          </div>
        </div>



      </div>

    </main>

  </>;
}
