import React from 'react'
import './Register_Page.css'
import { Link } from 'react-router-dom'

/*components*/
import Button_Style_One from '../../../Components/Button.Components/Button_Style_One/Button_Style_One'
import Brand_Image from '../../../Components/Image.Components/Brand_image/Brand_Image'
import Text_Banner from '../../../Components/Banner.Component/Text_Banner/Text_Banner'
/*components*/

export default function OpeningPage() {
  return (
    <div className='register-page'>
      <h1 className='register-page_banner'>
        Meal Planner
      </h1>

      <Brand_Image locationClassName='register-page_icon' />
      <Text_Banner locationClassName='register-page_details' text='Welcome to CARPs Meal Planner app! Login if you have an existing account or sign-up for access.' />

      <div className='register-page_buttons'>
        <Link to="/login">
          <Button_Style_One buttonName="Login" />
        </Link>
        <Link to="/sign-up">
          <Button_Style_One buttonName="Sign-Up" />
        </Link>
      </div>
    </div>
  )
}