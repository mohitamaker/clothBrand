import React from 'react'
import Footer from '../components/layout/Footer'
import { latestDrops, categories } from '../data/homeData'
import ProductCard from '../features/products/ProductCard'
const HomePage = () => {
    return (
        <div className="w-full overflow-hidden bg-white text-[#111]">
            <section className="relative min-h-[620px] overflow-hidden sm:min-h-[680px] md:min-h-[720px] lg:min-h-[780px]">
                <video className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-[62%_center]" src="herovid.mp4" autoPlay muted loop playsInline />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] flex-col items-center justify-end px-4 pb-10 text-center text-white sm:min-h-[680px] sm:px-6 sm:pb-14 md:min-h-[720px] md:px-10 md:pb-16 lg:min-h-[780px] lg:pb-20">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">ZEVORA Performance</p>
                    <h1 className="max-w-[320px] text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:max-w-xl sm:text-6xl md:max-w-3xl md:text-7xl lg:max-w-4xl lg:text-8xl">Own the<br />next move.</h1>
                    <p className="mt-5 max-w-[300px] text-xs font-medium leading-5 sm:max-w-md sm:text-sm sm:leading-6 md:text-base">Performance essentials made to keep pace with every version of you.</p>
                    <div className="mt-6 flex w-full max-w-sm flex-col gap-2 px-2 sm:mt-7 sm:flex-row sm:justify-center sm:gap-3 sm:px-0">
                        <a href="#new-in" className="w-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-black transition hover:bg-black hover:text-white sm:w-auto sm:px-6 sm:text-xs">Shop new arrivals</a>
                        <a href="#women" className="w-full border border-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-black sm:w-auto sm:px-6 sm:text-xs">Explore women</a>
                    </div>
                </div>
            </section>

            <section id="new-in" className="w-full bg-[#f4f4f2] py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">New this week</p>
                    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
                        <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-4xl md:text-5xl">Gear that goes.</h2>
                        <a href="#new-in" className="hidden whitespace-nowrap text-sm font-bold underline underline-offset-4 sm:block">View all</a>
                    </div>
                    <div className="scrollbar-custom flex gap-3 overflow-x-auto pb-4 sm:gap-4 md:gap-5">
                        {latestDrops.map((product) => (
                            <div key={product.id} className="w-[260px] flex-shrink-0 sm:w-[300px] md:w-[340px] lg:w-[380px]">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage
