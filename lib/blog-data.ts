export const BLOG_POSTS = [
  {
    slug: "oyster-mushroom-cultivation-india",
    title: "The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business",
    description: "Discover why Oyster mushroom cultivation is transforming small-scale farmers and urban youth into successful business owners in India with its high-profit and low-cost model.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    imageAlt: "Oyster Mushroom Cultivation in India",
    datePublished: "2024-01-10T08:00:00+08:00",
    dateModified: "2024-01-10T08:00:00+08:00",
  },
  {
    slug: "button-mushroom-vs-oyster-mushroom",
    title: "Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide",
    description: "Detailed comparison of button mushroom and oyster mushroom cultivation, including temperature, humidity, growing period, substrate, yield and farming requirements.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    imageAlt: "Button vs Oyster Mushroom",
    datePublished: "2024-01-15T08:00:00+08:00",
    dateModified: "2024-01-15T08:00:00+08:00",
  },
  {
    slug: "oyster-mushroom-cultivation-process",
    title: "Oyster Mushroom Cultivation in India | Complete Guide",
    description: "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    imageAlt: "Oyster Mushroom Cultivation Process",
    datePublished: "2024-01-20T08:00:00+08:00",
    dateModified: "2024-01-20T08:00:00+08:00",
  },
  {
    slug: "mushroom-farming-business-plan-india",
    title: "Starting a Profitable Mushroom Farming Business in India: Where to Begin?",
    description: "Learn how to start a profitable mushroom farming business in India with practical guidance on infrastructure, budgeting, raw materials, cultivation and marketing.",
    image: "",
    imageAlt: "Mushroom Farming Business Plan in India",
    datePublished: "2026-03-01T08:00:00+05:30",
    dateModified: "2026-03-01T08:00:00+05:30",
  },
  {
    slug: "button-mushroom-farming-guide",
    title: "Button Mushroom Farming: From Spawn Preparation to Farm Setup",
    description: "Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
    imageAlt: "Organic Button Mushroom Farm Setup",
    datePublished: "2026-03-05T08:00:00+05:30",
    dateModified: "2026-03-05T08:00:00+05:30",
  }
];

export async function getBlogPost(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
}
