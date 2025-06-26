import { useState } from 'react'
import { ShieldPlus } from 'lucide-react'

export default function HeaderNotice() {
    const [isLangOpen , setLangOpen] = useState(false)
    const [isCurrencyOpen , setCurrencyOpen] = useState(false)

    return (
        <div>
        {/* Notice section */}
        <header className='header-site'>
            <aside className='store-notice bg-blue-900 flex items-center'>
            <div className="container p-2">
                <p className="text-center text-sm text-white font-normal">
                    Due to the <span className='font-extrabold'>COVID 19</span> epidemic, orders may be processed with a slight delay
                </p>
            </div>
            </aside>
        </header>
        {/* End Notice Section */}

        {/* Topbar Section */}
        <div className="header-top ">  
            {/* Container */}
            <div className="container flex justify-between gap-[25px]">
            {/* Menu Left */}
            <ul className="menu-left flex items-center gap-[15px] my-2">
                <li className='menu-item'>About Us</li>
                <li className='menu-item'>My account</li>
                <li className='menu-item'>Wishlist</li>
                <li className='menu-item'>Order Tracking</li>
            </ul>
            {/* End Menu Left */}

            {/* Menu Right */}
            <div className="menu-right flex">
                <div className="notice-top flex items-center">
                <p className='flex gap-[3px] items-center border-gray-300 border-r-[1px] pr-[10px]'>
                    <ShieldPlus size={16}/>
                    100% Secure delivery without contacting the courier
                </p>
                <p className='px-[10px]'>
                    Need help? Call Us: 
                    <a href="" className='tel-site'>+ 0020 500</a>
                </p>
                </div>
                <div className="switcher-section border-l-[1px] border-gray-300 flex items-center">
                    <div 
                    className="top-dropdown" 
                    id='topDropdown-1'
                    onMouseEnter={() => setLangOpen(true)}
                    onMouseLeave={() => setLangOpen(false)}
                    >
                    <p className='store-lang'>Englisg</p>
                    <ul className={`dropdown ${isLangOpen ? 'dropdown-expanded' : ''}`}> 
                        <li className='dropdown-item'>
                        English
                        </li>
                        <li className='dropdown-item'>
                        Thai
                        </li>
                        <li className='dropdown-item'>
                        Japan
                        </li>
                        <li className='dropdown-item'>
                        China
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="switcher-section flex items-center">
                    <div 
                    className="top-dropdown" 
                    id='topDropdown-1'
                    onMouseEnter={() => setCurrencyOpen(true)}
                    onMouseLeave={() => setCurrencyOpen(false)}
                    >
                    <p className='store-lang'>Englisg</p>
                    <ul className={`dropdown ${isCurrencyOpen ? 'dropdown-expanded' : ''}`}> 
                        <li className='dropdown-item'>
                        USD
                        </li>
                        <li className='dropdown-item'>
                        THB
                        </li>
                        <li className='dropdown-item'>
                        YEN
                        </li>
                        <li className='dropdown-item'>
                        YUAN
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* End Menu Right */}
            </div>
            {/* End Container */}
        </div>
        {/* End Topbar Section */}
        </div>
    )
}
