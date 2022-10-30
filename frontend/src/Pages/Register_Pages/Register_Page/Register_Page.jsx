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
    <div className='Register_Page'>
      <h1 className='Register_Banner'>
        Meal Planner
      </h1>

      <Brand_Image locationClassName='Register_page_Icon' />

      <Text_Banner text='Welcome to CARPs Meal Planner app! Login if you have an existing account or sign-up for access.' />

      <div className='Register_page_Buttons'>
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