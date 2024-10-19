import React from 'react';

const FooterLinks = () => (
  <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
    <div>
      <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
        Follow us
      </h2>
      <ul className='text-gray-500 dark:text-gray-400 font-medium'>
        <li className='mb-4'>
          <a
            href='https://www.linkedin.com/company/devhousellc/'
            className='hover:underline'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://www.behance.net/thedevhouse'
            className='hover:underline'
          >
            Behance
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
        Legal
      </h2>
      <ul className='text-gray-500 dark:text-gray-400 font-medium'>
        <li className='mb-4'>
          <a href='#' className='hover:underline'>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default FooterLinks;