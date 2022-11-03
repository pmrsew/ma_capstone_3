import React from 'react'
import './opening-page-style.css'
import { Link } from 'react-router-dom'
/*components*/
import ButtonStyleOne from '../../../Components/Button.Components/button-style-one/button-style-one'
import BrandImage from '../../../Components/Image.Components/brand-image/brand-image'
import TextBanner from '../../../Components/Banner.Component/text-banner'


export default function OpeningPage() {
  return (
    <div className='opening-page'>
      <h1 className='opening-page_banner'>
        Meal Planner
      </h1>

      <BrandImage locationClassName='opening-page_icon' />
      <TextBanner locationClassName='opening-page_details' text='Welcome to CARPs Meal Planner app! Login if you have an existing account or sign-up for access.' />

      <div className='opening-page_buttons'>
        <Link to="/login">
          <ButtonStyleOne buttonName="Login" />
        </Link>
        <Link to="/sign-up">
          <ButtonStyleOne buttonName="Sign-Up" />
        </Link>
      </div>
    </div>
  )
}