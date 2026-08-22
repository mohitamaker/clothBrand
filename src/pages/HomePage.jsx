import React from 'react'

const HomePage = () => {
    const categories = [
        { title: 'Women', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85' },
        { title: 'Men', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85' },
        { title: 'Kids', image: 'https://images.unsplash.com/photo-1519238360530-67349d78aaf3?auto=format&fit=crop&w=900&q=85' },
    ]

    const products = [
        { name: 'Aero Run Jacket', category: 'Women\'s running', price: '₹7,495', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=85' },
        { name: 'Motion 365 Tee', category: 'Men\'s training', price: '₹2,195', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501b9?auto=format&fit=crop&w=800&q=85' },
        { name: 'Dawn Seamless Set', category: 'Women\'s lifestyle', price: '₹5,995', image: 'https://images.unsplash.com/photo-1506629905607-d4057d0068f1?auto=format&fit=crop&w=800&q=85' },
        { name: 'Terrain Utility Pant', category: 'Men\'s lifestyle', price: '₹4,995', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=85' },
    ]
    return (
        <main className="overflow-hidden bg-white text-[#111]">
            <section className="relative isolate min-h-[650px] overflow-hidden bg-[#dedbd5] sm:min-h-[720px]">
                <video className="absolute inset-0 h-full w-full object-cover object-[62%_center]" src="herovid.mp4" alt="Athlete wearing ZEVORA performance apparel" autoPlay muted loop/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="relative mx-auto flex min-h-[650px] max-w-[1600px] flex-col justify-end px-5 pb-12 text-center text-white sm:min-h-[720px] sm:px-10 sm:pb-16">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">ZEVORA Performance</p>
                    <h1 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-7xl lg:text-8xl">Own the<br />next move.</h1>
                    <p className="mx-auto mt-5 max-w-md text-sm font-medium sm:text-base">Performance essentials made to keep pace with every version of you.</p>
                    <div className="mt-7 flex justify-center gap-3">
                        <a href="#new-in" className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-black transition hover:bg-black hover:text-white">Shop new arrivals</a>
                        <a href="#women" className="border border-white px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-black">Explore women</a>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-10 sm:py-24">
                <div className="mb-8 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Shop by sport</p><h2 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-4xl">Made to move.</h2></div><a className="hidden text-sm font-bold underline underline-offset-4 sm:block" href="#new-in">Shop all</a></div>
                <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
                    {categories.map((category) => <a id={category.title.toLowerCase()} key={category.title} href="#new-in" className="group relative h-[420px] overflow-hidden bg-zinc-200 sm:h-[540px]"><img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><span className="absolute bottom-6 left-6 text-3xl font-black tracking-[-0.05em] text-white">{category.title}</span><span className="absolute bottom-7 right-6 text-white"><i className="ri-arrow-right-line text-2xl" /></span></a>)}
                </div>
            </section>

            <section id="new-in" className="bg-[#f4f4f2] py-16 sm:py-24"><div className="mx-auto max-w-[1600px] px-5 sm:px-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">New this week</p><div className="mb-8 flex items-end justify-between"><h2 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-4xl">Gear that goes.</h2><a href="#new-in" className="text-sm font-bold underline underline-offset-4">View all</a></div><div className="grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-5">{products.map((product) => <article key={product.name} className="group"><div className="relative aspect-[.83] overflow-hidden bg-[#ddd] "><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><button type="button" aria-label={`Save ${product.name}`} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg transition hover:bg-white"><i className="ri-heart-3-line" /></button></div><div className="mt-3 flex gap-2"><div className="min-w-0 flex-1"><h3 className="truncate text-sm font-bold">{product.name}</h3><p className="mt-1 text-sm text-zinc-500">{product.category}</p></div><p className="text-sm font-bold">{product.price}</p></div></article>)}</div></div></section>

            <section className="grid min-h-[580px] bg-black text-white md:grid-cols-2"><div className="flex flex-col justify-center px-7 py-16 sm:px-14 lg:px-24"><p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">ZEVORA club</p><h2 className="mt-4 max-w-md text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-6xl">Train your way. Get more.</h2><p className="mt-6 max-w-sm text-sm leading-6 text-zinc-300">Get early access, member-only offers and a little more motivation for the miles ahead.</p><a href="#join" className="mt-8 w-fit bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-black transition hover:bg-zinc-200">Join the club</a></div><div className="min-h-[400px] overflow-hidden"><img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=85" alt="Fitness training" /></div></section>
        </main>
    )
}

export default HomePage
