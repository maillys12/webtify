export type Category = "premium-app" | "otp";
export type Plan = {id:string;name:string;category:Category;price:number;description:string;features:string[];popular?:boolean};
export const plans:Plan[]=[
{id:"app-starter",name:"Starter",category:"premium-app",price:99,description:"เริ่มต้นร้านขายสินค้าดิจิทัล",features:["หน้าร้านพร้อมใช้งาน","แสดงสินค้าและราคา","ระบบคำสั่งซื้อพื้นฐาน","แดชบอร์ดร้านค้า"]},
{id:"app-business",name:"Business",category:"premium-app",price:219,description:"รองรับการเติบโตของร้านค้า",popular:true,features:["ทุกอย่างใน Starter","จัดการโปรโมชัน","รายงานยอดขาย","ปรับแต่งหน้าร้านเพิ่มเติม"]},
{id:"app-pro",name:"Pro",category:"premium-app",price:499,description:"เหมาะกับร้านค้าที่ต้องการความยืดหยุ่น",features:["ทุกอย่างใน Business","บทบาทผู้ดูแลหลายระดับ","รายงานเชิงลึก","ปรับแต่งขั้นสูง"]},
{id:"otp-standard",name:"Standard",category:"otp",price:179,description:"เว็บไซต์บริการหมายเลขแบบเริ่มต้น",features:["หน้าแสดงรายการบริการ","ระบบสมาชิกพื้นฐาน","จัดการคำขอใช้บริการ","แดชบอร์ดพื้นฐาน"]},
{id:"otp-premium",name:"Premium",category:"otp",price:259,description:"เครื่องมือเพิ่มเติมสำหรับธุรกิจ",popular:true,features:["ทุกอย่างใน Standard","รายงานเพิ่มเติม","จัดการผู้ดูแล","เครื่องมือตรวจสอบการใช้งาน"]}
];
