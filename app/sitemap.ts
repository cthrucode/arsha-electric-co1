import type { MetadataRoute } from 'next';
import { business, services, cities } from './data';
export default function sitemap(): MetadataRoute.Sitemap {
 const routes=['','/about','/contact','/privacy'];
 return [
  ...routes.map(r=>({url:`${business.url}${r}`,lastModified:new Date()})),
  ...services.map(s=>({url:`${business.url}/services/${s.slug}`,lastModified:new Date()})),
  ...cities.map(c=>({url:`${business.url}/service-areas/${c.slug}`,lastModified:new Date()})),
 ];
}
