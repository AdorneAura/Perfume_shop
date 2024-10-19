import React from 'react';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import dribbleIcon from '../assets/dribble.svg';
import footerSocials from '../fields/footerSocials'

const FooterSocials = () => (
  <div className='flex mt-4 sm:justify-center sm:mt-0'>
    {
      footerSocials.map((social) => (
        <a
          key={social.title}
          href={social.href}
          className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
        >
          <img src={social.icon} alt={social.icon} className='w-4 h-4' />
          <span className='sr-only'>{social.title}</span>
        </a>
      ))
    }
  </div>
);

export default FooterSocials;