import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hibatullah-dyfa-grahatama-b974ba203/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/dyfagrahatama" target="_blank"><FaGithub /></a>
        <a href="https://www.upwork.com/freelancers/~01c8e59b218cea481a" target="_blank"><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials