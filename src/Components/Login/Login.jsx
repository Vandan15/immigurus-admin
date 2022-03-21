import React from 'react'
import './index.scss';
import LogoImg from '../../Assets/img/logo/logo.png'
import LandingImg from '../../Assets/img/landing-page/landing-page.png'
import {PrimaryBtn} from '../Assets/Buttons/Buttons';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login-wrapper'>
        <div className='row'>
            <div className='col-12 col-lg-8 p-0'>
                <div className='landing-image-wrapper'>
                    <img src={LandingImg}></img>
                    <div className='overlay'></div>
                </div>
            </div>
            <div className='col-12 col-lg-4 p-0'>
                <div className='form-wrapper'>
                    <img src={LogoImg}></img>
                    <p className='text-login'>Please login to your account</p>
                    <div className='input-wrapper'>
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" value="test@gmail.com"></input>
                    </div>
                    <div className='input-wrapper'>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" value="test"></input>
                    </div>
                    <div className='w-100 d-flex justify-content-end'>
                        <a className='forgot-link' href="#">Forgot password?</a>
                    </div>
                    <div className='btn-wrapper'>
                        
                        <Link to="/students"><PrimaryBtn text="LOGIN"/></Link>
                    </div>
                    <hr className='hr-login'/>
                    {/* <p className='text-login mt-2'>or Login using</p>
                    <div className='social-icon-wrapper'>
                        <div className='fb-circle'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className='tw-circle'>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className='g-circle'>
                            <i class="fa-brands fa-google"></i>
                        </div>
                    </div> */}
                    <p className='text-sign-up'>IMMIGURUS</p>
                </div>
            </div>
        </div>
    </div>
  )
}
