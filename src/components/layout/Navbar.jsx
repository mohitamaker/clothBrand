import React from 'react'
import { useState } from 'react'
const Navbar = () => {
    const navItems = [
        { name: "New", path: "/new" },
        { name: "Featured", path: "/featured" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Kids", path: "/kids" },
        { name: "Sale", path: "/sale", sale: true },
    ];

    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <div>

            <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
                <nav className="h-[64px] px-5 sm:px-8 lg:px-12 flex items-center justify-between">
                    <div className="flex items-center">
                        <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden mr-4 p-1" aria-label="Open menu">
                            {mobileMenu ? (
                                <i className="ri-close-line"></i>
                            ) : (
                                <i className="ri-menu-line"></i>
                            )}
                        </button>
                        <a href="/" className="text-[24px] sm:text-[26px] font-black tracking-[-1.5px] italic">ZEVORA</a>
                    </div>

                    <div className="hidden lg:flex items-center h-full gap-8 xl:gap-10">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.path} className={`relative h-full items-centertext-[13px] font-medium tracking-[-0.1px] transition-colors group ${item.sale ? "text-red-500" : "text-gray-800 hover:text-black"}`}>
                                {item.name}
                                <span className={`absolute bottom-[12px] left-0 h-[1.5px] bg-black transition-all duration-300 ${item.sale ? "w-full bg-red-500" : "w-0 group-hover:w-full"}`} />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 sm:gap-5">

                        <button className="group" aria-label="Search">
                            <i className="ri-search-line"></i>
                        </button>

                        <button className="group hidden sm:block" aria-label="Wishlist">
                            <i className="ri-heart-line"></i>
                        </button>

                        <button
                            className="group relative"
                            aria-label="Cart"
                        >
                            <i className="ri-shopping-bag-line"></i>

                            <span className="absolute -top-2 -right-2 text-[9px] w-[15px] h-[15px] rounded-full bg-black text-white flex items-center justify-center">
                                0
                            </span>
                        </button>

                        <button
                            className="group hidden sm:block"
                            aria-label="Profile"
                        >
                            <i className="ri-user-line"></i>
                        </button>

                    </div>

                </nav>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 border-t
                        border-gray-100
                        ${mobileMenu
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }
          `}
                >

                    <div className="px-6 py-5 bg-white">

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                onClick={() => setMobileMenu(false)}
                                className={`flex items-center justify-between py-4 border-b border-gray-100 text-[14px] font-medium ${item.sale? "text-red-500": "text-gray-900"}`}
                            >
                                <span>{item.name}</span>
                                <i className="ri-arrow-right-s-line"></i>
                            </a>
                        ))}


                        {/* Mobile Actions */}
                        <div className="flex items-center gap-6 pt-5">

                            <button className="flex items-center gap-2 text-sm">
                                <i className="ri-search-line"></i>
                                Search
                            </button>


                            <button className="flex items-center gap-2 text-sm">
                                <i className="ri-user-line"></i>
                                Profile
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
