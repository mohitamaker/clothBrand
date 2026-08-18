import { useState } from "react";
export default function Navbar() {
    const navItems = ["New In", "Women", "Men", "Kids", "Sale"];
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
            <nav className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 md:px-8 lg:px-10">
                <div className="flex items-center gap-5">
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden"
                        aria-label="Menu"
                    >
                        <i className={open ? "ri-close-line text-2xl" : "ri-menu-line text-2xl"}></i>
                    </button>
                    <a href="/" className="text-2xl font-black italic tracking-[-1.5px]">ZEVORA</a>
                </div>
                <div className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <a key={item} href="#" className={`text-[14px] font-medium  hover:underline underline-offset-4 transition-all duration-500 ${item === "Sale" ? "text-red-600" : "text-black"}`}
                        >{item}</a>
                    ))}
                </div>
                <div className="flex items-center gap-4 md:gap-5">
                    <button aria-label="Search" className="transition-transform hover:scale-110">
                        <i className="ri-search-line text-[21px]"></i>
                    </button>
                    <button aria-label="Wishlist" className="hidden transition-transform hover:scale-110 sm:block">
                        <i className="ri-heart-3-line text-[21px]"></i>
                    </button>
                    <button aria-label="Cart" className="relative transition-transform hover:scale-110">
                        <i className="ri-shopping-bag-line text-[21px]"></i>
                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] text-white">0</span>
                    </button>
                    <button aria-label="Profile" className="hidden transition-transform hover:scale-110 sm:block">
                        <i className="ri-user-line text-[21px]"></i>
                    </button>
                </div>
            </nav>
            {open && (
                <div className="border-t border-gray-200 bg-white lg:hidden fixed inset-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto">
                    <div className="flex min-h-full flex-col px-6 py-8">
                        {navItems.map((item) => (
                            <a key={item} href="#" onClick={() => setOpen(false)} className={`py-5 text-lg font-medium ${item === "Sale" ? "text-red-600" : "text-black"}`}
                            >{item}</a>
                        ))}
                        <div className="mt-4 flex gap-8 border-t border-gray-200 pt-6">
                            <button className="flex items-center gap-2 text-sm">
                                <i className="ri-heart-3-line"></i>
                                Wishlist
                            </button>
                            <button className="flex items-center gap-2 text-sm">
                                <i className="ri-user-line"></i>
                                Profile
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}