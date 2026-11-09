import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
export const metadata:Metadata={title:{default:"Webtify | เช่าเว็บไซต์สำเร็จรูปสำหรับธุรกิจดิจิทัล",template:"%s | Webtify"},description:"Webtify บริการเช่าเว็บไซต์สำเร็จรูปสำหรับธุรกิจสินค้าดิจิทัล ดูตัวอย่างเว็บไซต์และแพ็กเกจเช่ารายเดือน เริ่มต้นเพียง 99 บาท",robots:{index:true,follow:true},openGraph:{title:"Webtify — เว็บไซต์พร้อมใช้ ธุรกิจพร้อมเติบโต",description:"เช่าเว็บไซต์สำเร็จรูปสำหรับธุรกิจดิจิทัล พร้อมแพ็กเกจให้เลือก",type:"website",locale:"th_TH"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body className="antialiased"><Navbar/><main>{children}</main><Footer/></body></html>}
