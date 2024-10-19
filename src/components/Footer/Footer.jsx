import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
// import FooterSocials from './FooterSocials';
import FooterLegal from './FooterLegal';

const Footer = () => {
  return (
    <footer className='bg-black dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <FooterLogo />
          <FooterLinks />
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <FooterLegal />
          {/* <FooterSocials /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;