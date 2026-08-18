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

                    {/* ================= LEFT ================= */}
                    <div className="flex items-center">

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="lg:hidden mr-4 p-1"
                            aria-label="Open menu"
                        >
                            {mobileMenu ? (
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                >
                                    <path d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            ) : (
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                >
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                            )}
                        </button>

                        {/* Zevora Logo */}
                        <a
                            href="/"
                            className="text-[24px] sm:text-[26px] font-black tracking-[-1.5px] italic"
                        >
                            ZEVORA
                        </a>
                    </div>


                    {/* ================= CENTER NAV ================= */}
                    <div className="hidden lg:flex items-center h-full gap-8 xl:gap-10">

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className={`
                  relative h-full flex items-center
                  text-[13px]
                  font-medium
                  tracking-[-0.1px]
                  transition-colors
                  group
                  ${item.sale
                                        ? "text-red-500"
                                        : "text-gray-800 hover:text-black"
                                    }
                `}
                            >
                                {item.name}

                                {/* Hover / Active underline */}
                                <span
                                    className={`
                    absolute
                    bottom-[12px]
                    left-0
                    h-[1.5px]
                    bg-black
                    transition-all
                    duration-300
                    ${item.sale
                                            ? "w-full bg-red-500"
                                            : "w-0 group-hover:w-full"
                                        }
                  `}
                                />
                            </a>
                        ))}

                    </div>


                    {/* ================= RIGHT ACTIONS ================= */}
                    <div className="flex items-center gap-4 sm:gap-5">

                        {/* Search */}
                        <button
                            className="group"
                            aria-label="Search"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                className="transition-transform group-hover:scale-110"
                            >
                                <circle cx="11" cy="11" r="6.5" />
                                <path d="M16 16l5 5" />
                            </svg>
                        </button>


                        {/* Wishlist */}
                        <button
                            className="group hidden sm:block"
                            aria-label="Wishlist"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                className="transition-transform group-hover:scale-110"
                            >
                                <path
                                    d="M20.8 8.8
                  c0-3-2.2-5.1-5-5.1
                  c-1.7 0-3.2.8-4.2 2.1
                  C10.6 4.5 9.1 3.7 7.4 3.7
                  c-2.8 0-5 2.1-5 5.1
                  c0 5.1 9.2 11.2 9.2 11.2
                  s9.2-6.1 9.2-11.2z"
                                />
                            </svg>
                        </button>


                        {/* Cart */}
                        <button
                            className="group relative"
                            aria-label="Cart"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                className="transition-transform group-hover:scale-110"
                            >
                                <path d="M4 7h16l-1.5 13h-13L4 7z" />
                                <path d="M8 7a4 4 0 018 0" />
                            </svg>

                            {/* Cart count */}
                            <span className="absolute -top-2 -right-2 text-[9px] w-[15px] h-[15px] rounded-full bg-black text-white flex items-center justify-center">
                                0
                            </span>
                        </button>


                        {/* Profile */}
                        <button
                            className="group hidden sm:block"
                            aria-label="Profile"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                className="transition-transform group-hover:scale-110"
                            >
                                <circle cx="12" cy="8" r="3.5" />
                                <path d="M5 21c0-3.8 3-6.5 7-6.5s7 2.7 7 6.5" />
                            </svg>
                        </button>

                    </div>

                </nav>


                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            border-t
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
                                className={`
                  flex items-center justify-between
                  py-4
                  border-b border-gray-100
                  text-[14px]
                  font-medium
                  ${item.sale
                                        ? "text-red-500"
                                        : "text-gray-900"
                                    }
                `}
                            >
                                <span>{item.name}</span>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </a>
                        ))}


                        {/* Mobile Actions */}
                        <div className="flex items-center gap-6 pt-5">

                            <button className="flex items-center gap-2 text-sm">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <circle cx="11" cy="11" r="6.5" />
                                    <path d="M16 16l5 5" />
                                </svg>
                                Search
                            </button>


                            <button className="flex items-center gap-2 text-sm">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <circle cx="12" cy="8" r="3.5" />
                                    <path d="M5 21c0-3.8 3-6.5 7-6.5s7 2.7 7 6.5" />
                                </svg>
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
