"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links=[{href:"/",label:"หน้าแรก"},{href:"/templates",label:"เทมเพลต"},{href:"/pricing",label:"แพ็กเกจ"},{href:"/#how-it-works",label:"วิธีใช้งาน"},{href:"/#faq",label:"คำถามที่พบบ่อย"}];
export function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0814]/85 backdrop-blur-xl">
  <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
   <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight" onClick={()=>setOpen(false)}><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">w.</span>webtify<span className="text-violet-400">.</span></Link>
   <nav className="hidden items-center gap-7 text-sm text-[#beb4d2] md:flex" aria-label="เมนูหลัก">{links.map(x=><Link className="hover:text-white transition" href={x.href} key={x.href}>{x.label}</Link>)}</nav>
   <Link href="/pricing" className="btn-primary hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold md:flex">เริ่มต้นเช่า <ArrowUpRight size={16}/></Link>
   <button className="md:hidden rounded-lg border border-white/15 p-2" aria-expanded={open} aria-label={open?"ปิดเมนู":"เปิดเมนู"} onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button>
  </div>
  {open&&<nav aria-label="เมนูมือถือ" className="flex flex-col gap-1 border-t border-white/10 bg-[#100b1b] px-5 py-4 md:hidden">{links.map(x=><Link onClick={()=>setOpen(false)} key={x.href} href={x.href} className="rounded-lg px-3 py-3 text-sm text-[#d7cce7] hover:bg-white/5">{x.label}</Link>)}<Link onClick={()=>setOpen(false)} href="/pricing" className="btn-primary mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">ดูแพ็กเกจ</Link></nav>}
 </header>;
}
