import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap {
 const siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
 if(!siteUrl)return [];
 const base=siteUrl.replace(/\/$/,"");
 return ["/","/pricing","/templates"].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:"weekly" as const,priority:path==="/"?1:0.8}));
}
