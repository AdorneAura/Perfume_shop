import React from 'react';
import logo from '../../assets/logo.png';

const FooterLogo = () => (
  <div className='mb-6 md:mb-0'>
    <a href='https://www.adorneaura.com/' className='flex items-center'>
      <img
        src={logo}
        className='w-20 me-3'
        alt='DevHouse Logo'
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        Adorne Aura
      </span>
    </a>
  </div>
);

export default FooterLogo;