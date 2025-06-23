import React from 'react'
import { ShieldPlus } from 'lucide-react'

export default function header() {
  return (
    <>
      <aside className='store-notice bg-blue-900 flex items-center'>
        <div className="container p-2">
          <p className="text-center text-sm text-white font-semibold">
              Due to the <span className='font-extrabold'>COVID 19</span> epidemic, orders may be processed with a slight delay
          </p>
        </div>
      </aside>

      <div className="header-top border border-b-1 text-[12.5px]">
        <div className="container flex p-2">
          <ul className="menu-left inline-flex items-center gap-4 min-w-[200px]">
            <li className='menu-item'>About Us</li>
            <li className='menu-item'>My account</li>
            <li className='menu-item'>Wishlist</li>
            <li className='menu-item'>Order Tracking</li>
          </ul>

          <div className="menu-right flex justify-end ml-[120px]">
            <div className="topbar-notice flex items-center gap-1 px-6 border-r-[1px]">
              <ShieldPlus />
              <span>100% Secure delivery without con  tacting the courier</span>
            </div>
            <div className="text-conent px-6 flex items-center gap-1">
              Need help? Call Us: 
              <a href="" className='text-blue-400 underline font-extrabold'>+ 0020 500</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
