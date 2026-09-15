import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import { getBlogPost, BLOG_POSTS } from "../../../lib/blog-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return BLOG_POSTS.filter(
    (post) =>
      post.slug !== "mushroom-farming-business-plan-india" &&
      post.slug !== "button-mushroom-farming-guide"
  ).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getBlogPost(slug);
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `https://organicmushroomsfarm.com/blog/${post.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://organicmushroomsfarm.com/blog/${post.slug}`,
        siteName: "Organic Mushroom Farm",
        type: "article",
        images: post.image
          ? [
              {
                url: post.image,
                alt: post.imageAlt || post.title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: post.image ? [post.image] : undefined,
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let post;
  try {
    post = await getBlogPost(slug);
  } catch (error) {
    notFound();
  }

  const postUrl = `https://organicmushroomsfarm.com/blog/${post.slug}`;

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        "headline": post.title,
        "description": post.description,
        "url": postUrl,
        "mainEntityOfPage": {
          "@id": `${postUrl}#webpage`
        },
        "image": post.image
          ? {
              "@type": "ImageObject",
              "url": post.image
            }
          : undefined,
        "datePublished": post.datePublished,
        "dateModified": post.dateModified || post.datePublished,
        "author": {
          "@type": "Organization",
          "name": "Organic Mushroom Farm"
        },
        "publisher": {
          "@id": "https://organicmushroomsfarm.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${postUrl}#webpage`,
        "url": postUrl,
        "name": post.title,
        "isPartOf": {
          "@id": "https://organicmushroomsfarm.com/#website"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-12 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li>
              <Link href="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate">{post.title}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          {post.image && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image 
                src={post.image} 
                alt={post.imageAlt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="text-xl font-medium mb-8 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-slate-900">Want to start your own mushroom farm?</h2>
            <p className="mb-6">Explore our training programs to master the complete cultivation process.</p>
            <Link href="/training" className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Explore Training Programs
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
