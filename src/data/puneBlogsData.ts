import { PUNE_BLOGS_PART_1 } from './puneBlogs/puneBlogsPart1';
import { PUNE_BLOGS_PART_2 } from './puneBlogs/puneBlogsPart2';
import { PUNE_BLOGS_PART_3 } from './puneBlogs/puneBlogsPart3';

export interface PuneBlog {
  id: number;
  keyword: string;
  path: string;
  category: string;
  title: string;
  meta: string;
  h1: string;
  intro: string;
  faqs: { q: string; a: string }[];
  links: string[];
  area: string;
}

export const PUNE_BLOGS_METADATA: PuneBlog[] = [
  ...PUNE_BLOGS_PART_1,
  ...PUNE_BLOGS_PART_2,
  ...PUNE_BLOGS_PART_3
];

export const getPuneBlogByPath = (path: string): PuneBlog | undefined => {
  const cleanPath = path.toLowerCase().replace(/^\/+|\/+$/g, "").replace(/^locations\/pune\//, "");
  
  // Find in combined list
  const metaItem = PUNE_BLOGS_METADATA.find(b => b.path === cleanPath);
  if (!metaItem) return undefined;

  return {
    id: metaItem.id,
    keyword: metaItem.keyword,
    path: metaItem.path,
    category: metaItem.category,
    title: metaItem.title,
    meta: metaItem.meta,
    h1: metaItem.h1,
    intro: metaItem.intro,
    faqs: metaItem.faqs,
    links: metaItem.links,
    area: metaItem.area
  };
};
