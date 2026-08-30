import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white">
            <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-10 lg:py-16">
                <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-[1.3fr_1.3fr_1.1fr_1fr]">
                    <div>
                        <h3 className="mb-5 text-sm font-black uppercase">Support</h3>
                        <div className="grid grid-cols-1 gap-3 text-sm text-zinc-300">
                            <a href="#" className="transition hover:text-white">Contact us</a>
                            <a href="#" className="transition hover:text-white">Promotions & Sale</a>
                            <a href="#" className="transition hover:text-white">My Account</a>
                            <a href="#" className="transition hover:text-white">Exchange & Return Policy</a>
                            <a href="#" className="transition hover:text-white">Privacy Policy</a>
                            <a href="#" className="transition hover:text-white">Terms & Conditions</a>
                            <a href="#new-in" className="transition hover:text-white">Shoes</a>
                            <a href="#new-in" className="transition hover:text-white">Running Shoes</a>
                            <a href="#women" className="transition hover:text-white">Women's Collection</a>
                            <a href="#" className="transition hover:text-white">Sitemap</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-5 text-sm font-black uppercase">Shop</h3>
                        <div className="grid grid-cols-1 gap-3 text-sm text-zinc-300">
                            <a href="#new-in" className="transition hover:text-white">New Arrivals</a>
                            <a href="#women" className="transition hover:text-white">Women</a>
                            <a href="#men" className="transition hover:text-white">Men</a>
                            <a href="#kids" className="transition hover:text-white">Kids</a>
                            <a href="#new-in" className="transition hover:text-white">Performance Wear</a>
                            <a href="#new-in" className="transition hover:text-white">Running</a>
                            <a href="#new-in" className="transition hover:text-white">Training</a>
                            <a href="#new-in" className="transition hover:text-white">Lifestyle</a>
                            <a href="#" className="transition hover:text-white">Size Guide</a>
                            <a href="#" className="transition hover:text-white">Track Order</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-5 text-sm font-black uppercase">About</h3>
                        <div className="grid grid-cols-1 gap-3 text-sm text-zinc-300">
                            <a href="#" className="transition hover:text-white">Company</a>
                            <a href="#" className="transition hover:text-white">What is ZEVORA?</a>
                            <a href="#" className="transition hover:text-white">Our Story</a>
                            <a href="#" className="transition hover:text-white">Sustainability</a>
                            <a href="#" className="transition hover:text-white">Careers</a>
                            <a href="#" className="transition hover:text-white">Store Locator</a>
                            <a href="#" className="transition hover:text-white">Journal</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-black uppercase">Stay up to date</h3>
                        <div className="flex items-center gap-6 text-2xl">
                            <a href="#" aria-label="Instagram" className="transition hover:scale-110"><i className="ri-instagram-line"></i></a>
                            <a href="#" aria-label="Youtube" className="transition hover:scale-110"><i className="ri-youtube-line"></i></a>
                            <a href="#" aria-label="Pinterest" className="transition hover:scale-110"><i className="ri-pinterest-line"></i></a>
                            <a href="#" aria-label="Facebook" className="transition hover:scale-110"><i className="ri-facebook-fill"></i></a>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-sm font-black uppercase">Join ZEVORA</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">Get early access to new drops, exclusive offers and performance updates.</p>
                            <div className="mt-5 flex border-b border-zinc-600 pb-2">
                                <input type="email" placeholder="Your email address" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500" />
                                <button type="button" className="text-xs font-bold uppercase tracking-wider">Join</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14 border-t border-zinc-700 pt-8">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-2">
                            <div className="grid h-7 w-11 place-items-center rounded bg-white text-[9px] font-black text-blue-900">VISA</div>
                            <div className="grid h-7 w-11 place-items-center rounded bg-white text-[9px] font-black text-red-600">MC</div>
                            <div className="grid h-7 w-11 place-items-center rounded bg-white text-[9px] font-black text-blue-600">AMEX</div>
                            <div className="grid h-7 w-11 place-items-center rounded bg-white text-[9px] font-black text-blue-900">UPI</div>
                        </div>
                        <button type="button" className="flex w-fit items-center gap-3 border border-zinc-600 px-6 py-3"><span className="text-lg">🇮🇳</span><span className="text-sm font-bold uppercase">India</span></button>
                        <div className="text-left text-xs text-zinc-400 lg:text-right">
                            <p>© ZEVORA INDIA LTD, 2026. ALL RIGHTS RESERVED.</p>
                            <div className="mt-1 flex gap-4 lg:justify-end">
                                <a href="#" className="underline underline-offset-2 hover:text-white">Imprint</a>
                                <a href="#" className="underline underline-offset-2 hover:text-white">Legal Data</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
