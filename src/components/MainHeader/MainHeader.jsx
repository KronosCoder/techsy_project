import React from 'react'
import { Search , UserRound , ShoppingCart , Menu } from 'lucide-react'
import './MainHeader.css'

export default function MainHeader() {
  return (
    <div>
    {/* main header */}
      <div className="header-main py-[25px]">
        <div className="container header-wrapper flex gap-12">

          <div className="site-brand flex justify-center">
            <button 
            className='mobile-menu h-[100%] px-4 py-2'>
                <Menu
                    size={26}
                />
            </button>
            <div className="flex flex-col justify-center">
                <img 
                className='desktop-logo'
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png" 
                alt="logo_brand"
                />
                <img 
                className='mobile-logo'
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png" 
                alt="logo_brand"
                />
                <p className='text-gray-400 text-[11.5px]'>Online Grocery Shopping Center</p>
            </div>
          </div>

          <a className='location-box'>
            <span className='text-xs'>Your location</span>
            <div className="current-location text-[14px] text-blue-800 font-semibold">
              Select a Location
            </div>
          </a>

          <div className="header-search hidden flex-1">
            <form action="" className='w-[100%] h-[100%] flex items-center justify-between bg-gray-100 rounded-md px-8 py-4'>
              <input 
                type="search" 
                placeholder="Search for products ..."
               />
              <button  
                type="submit"
              >
                <Search />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-[15px]">
            <button className='user-profile-icon w-[40px] aspect-square rounded-full border flex items-center justify-center'>
              <UserRound
                size={22}
              />
            </button>
            <a className='flex items-center gap-[15px]'>
              <bdi className='text-base font-semibold'>
                <span>$</span>
                0.00
              </bdi>
              <div className="cart-button bg-red-50 w-[40px] aspect-square rounded-full flex items-center justify-center">
                <ShoppingCart
                  size={22}
                  className='text-red-500'
                />
                <div className="product-count">
                  0
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
      {/* end main header */}
    </div>
  )
}
