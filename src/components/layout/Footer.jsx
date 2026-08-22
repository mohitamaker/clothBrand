import React from 'react'

export default function Footer() {
  return <footer className="bg-[#111] px-5 py-10 text-white sm:px-10"><div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 md:flex-row"><div><p className="text-xl font-black italic tracking-[-1.5px]">ZEVORA®</p><p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">Built for forward motion. Designed for your everyday.</p></div><div className="flex gap-10 text-xs font-bold uppercase tracking-[0.08em] text-zinc-300"><a href="#new-in" className="hover:text-white">Shop</a><a href="#join" className="hover:text-white">Membership</a><a href="#" className="hover:text-white">Support</a></div></div><div className="mx-auto mt-10 max-w-[1600px] border-t border-zinc-800 pt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">© 2026 ZEVORA. All rights reserved.</div></footer>
}
