import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { plans, type Category } from "@/lib/plans";
export function PricingCards({category}:{category:Category}){
 return <div className={"grid gap-5 "+(category==="otp"?"md:grid-cols-2 max-w-3xl mx-auto":"md:grid-cols-3")}>{plans.filter(p=>p.category===category).map(p=><article key={p.id} className={"surface relative flex flex-col rounded-3xl p-6 "+(p.popular?"border-violet-500/80 glow":"")}>
 {p.popular&&<span className="absolute -top-3 left-6 rounded-full bg-violet-600 px-3 py-1 text-xs font-bold">ยอดนิยม</span>}
 <h3 className="text-xl font-bold">{p.name}</h3><p className="mt-2 min-h-10 text-sm text-[#a9a0bb]">{p.description}</p><div className="my-6"><span className="text-4xl font-black">฿{p.price}</span><span className="ml-2 text-sm text-[#a9a0bb]">/ เดือน</span></div><div className="mb-6 h-px bg-white/10"/>
 <ul className="mb-7 flex flex-1 flex-col gap-4">{p.features.map(f=><li key={f} className="flex items-start gap-2 text-sm text-[#e4ddec]"><Check size={17} className="mt-0.5 shrink-0 text-violet-400"/>{f}</li>)}</ul>
 <Link href={"/pricing#contact"} className={"flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold "+(p.popular?"btn-primary":"btn-secondary")}>สนใจแพ็กเกจนี้ <ArrowUpRight size={16}/></Link></article>)}</div>
}
