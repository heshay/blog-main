import Link from 'next/link';
import React, { useState } from 'react';
import { subscribeCustomerIo } from '../utils/newsletter';

function Footer() {
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);
  const subscribeNewsletter = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const success = subscribeCustomerIo(email);
    if (success) {
      setNewsletterSubbed(true);
    }
  }
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 pt-8 gap-8 md:pt-12 border-t border-gray-200">
          {/* 1st block */}
          <div className=" sm:col-span-12 md:col-span-6">
            <div className="mb-2">
              {/* Logo */}
          <h2 className="shrink-0 mr-4 text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/" className="block hover:underline" aria-label="Exec.Coach">
              Exec.Coach
            </Link>
          </h2>

            </div>
            <div className="text-sm text-gray-600">
              <Link href="[...slug]" as="terms-and-conditions" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link>
              {" · "}
              <Link href="[...slug]" as="privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>            

          </div>      

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8">



          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Exec Coach. All rights reserved. </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
