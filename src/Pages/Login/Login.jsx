import React, { useContext, useState } from 'react'
import google from '../../assets/R.webp'
import QR from '../../assets/OIP.webp'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../Context/UserLogin'
import { Helmet } from "react-helmet";


export default function Login() {



  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false)
  const [iserror, setiserror] = useState('')

  const {  setUserIsLogin } = useContext(Auth)

  const validationSchema = Yup.object({
    CountryCode: Yup.string().required('Country code is required'),
    Phone: Yup.string().required('Phone number is required'),
    Password: Yup.string().required('Password is required')
  });


  const { values, touched, isValid, errors, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      CountryCode: '+20',
      Phone: '',
      Password: ''
    },
    onSubmit: async () => {
      setisLoading(true)
      setiserror('')
      try {
        const { data } = await axios.post('/api/login.php', values, {
          headers: { 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>' },
          withCredentials: true,
        });

        if (data.message === 'loged sucssesfully') {
          console.log('Login successful:', data);
          localStorage.setItem('Token', data.data.Token)
          localStorage.setItem('dataUser', JSON.stringify({
            id: data.data.UsersId,
            name: data.data.UserName,
            photo: data.data.Photo,
            email: data.data.Email

          }))
          navigate('/home')
          setUserIsLogin(true)
        }




      } catch (error) {
        console.log(error.response.data.message
        );
        setiserror(error.response.data.message)
      }

      setisLoading(false)
    },
    validationSchema
  })


  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name="description" content="LoginPage" />
      </Helmet>

      <main className='py-5'>
        <div className="row justify-content-center g-2 g-lg-5">
          <div className="col-sm-9 col-lg-6 col-xl-5 ">

            <h1 className='mb-2 '>Login</h1>
            <p className='mb-4  text-muted'>Enter you phone number and password to your account</p>

            <form onSubmit={handleSubmit}>

              <label htmlFor="mobile" className='fw-bold'>Mobile Number</label>
              <div className='d-flex align-items-center mt-2 mb-3  group-form py-2 rounded-5'>

                <select name="CountryCode" value={values.CountryCode} onChange={handleChange} className=' select h-100 border-0 rounded-4 rounded-end-0 ps-2'>
                  <option value="egypt" >+20</option>
                  <option value="Russia">+234</option>
                  <option value="france">+958</option>
                  <option value="Italy">+992</option>
                </select>
                <span className='mx-2 border-1 h-75 border border-black border-opacity-25'></span>
                <input value={values.Phone} onChange={handleChange} onBlur={handleBlur} type="text" name="Phone" id='mobile' className='input h-100 w-100 border-0 rounded-4 px-2 ' placeholder='Enter Mobile Number' />

              </div>
              {errors.Phone && touched.Phone && <p className='text-danger'>{errors.Phone}</p>}

              <label htmlFor="Password" className='fw-bold'>Password</label>
              <input value={values.Password} onChange={handleChange} onBlur={handleBlur} type="password" name="Password" className='mt-2 mb-3 w-100 border-0 rounded-5 py-2 px-3 inputPassword' placeholder='Enter Your Password' />
              {errors.Password && touched.Password && <p className='text-danger'>{errors.Password}</p>}

              <div className='d-flex justify-content-between align-items-center'>

                <div className='d-flex align-items-center'>
                  <input type="checkbox" required />
                  <p className='mb-0 ms-2'>Remember me</p>
                </div>
                <div className='d-flex align-items-center'>
                  <p className='mb-0 '>Forget password?</p>
                  <span className='text-main ms-1 curser fw-bold' onClick={handleReset}>Reset</span>
                </div>

              </div>
              <button className='btn rounded-5 bg-orange text-white w-100 py-2 mt-4' type='submit' disabled={!isValid || isLoading}>{isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Login'}</button>
              {iserror && <p className='text-danger mb-0 mt-2 text-center'>{iserror}</p>}
              <p className=' text-center  position-relative Or my-3'>Or</p>
              <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3'>

                <button className='btn btn-outline-dark rounded-5 w-btn'><img src={google} alt="google" style={{ width: 30 }} className='me-2' />Signup With Google</button>
                <button className='btn btn-outline-dark rounded-5 w-btn '><img src={QR} alt="QR" style={{ width: 30 }} className='me-2 img-Qr' />Scan QR Code</button>

              </div>

              <p className='text-muted text-center mb-0 mt-3'>I don't have an acount? <span className='text-main curser fw-bold'>Signup</span></p>

            </form>



          </div>

          <div className="d-lg-block d-none col-lg-6 col-xl-7 ">
            <header className='headerSign position-relative  rounded-4'>
              <div className='position-absolute top-0 bottom-0 start-0 end-0 overload rounded-4'></div>
              <div className='position-absolute box-text'>
                <p className='px-3 text-white lh-lg'>Lorem ipsum dolor sit, Aliquid deserunt minima voluptatibus maxime dolores tenetur odio obcaecati adipisci. Ratione, ipsa.</p>
              </div>


            </header>

          </div>
        </div>

      </main>


    </>
  )
}
