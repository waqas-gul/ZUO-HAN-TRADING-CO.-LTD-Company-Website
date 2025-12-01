'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ChevronRight, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Private Label: A Complete Guide',
    excerpt:
      'Learn how to launch your own brand with private label manufacturing. From concept to market-ready product.',
    content:
      'Private label manufacturing offers a unique opportunity to build your own brand without the overhead of owning manufacturing facilities. This comprehensive guide covers everything from product selection to market launch.',
    author: 'Fatima Al Hashmi',
    date: '2024-11-14',
    category: 'Private Label',
    readTime: '10 min',
  },
  {
    id: 2,
    title: 'Quality Assurance in Contract Packaging: Best Practices',
    excerpt:
      'Understand the critical testing and inspection protocols that ensure premium quality in packaging operations.',
    content:
      'Quality assurance is non-negotiable in contract packaging. Learn about in-process testing, final inspections, compliance documentation, and how to maintain consistent quality across batches.',
    author: 'Ahmed Al Mansouri',
    date: '2024-11-10',
    category: 'Quality Control',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Sustainable Packaging Solutions for Modern Brands',
    excerpt:
      'Eco-friendly packaging options that reduce environmental impact while maintaining product integrity.',
    content:
      'Sustainability is increasingly important for brands. Discover recyclable materials, biodegradable options, and how sustainable packaging can become a competitive advantage.',
    author: 'Sofia Rodriguez',
    date: '2024-11-05',
    category: 'Sustainability',
    readTime: '7 min',
  },
  {
    id: 4,
    title: 'Cosmetics and Beauty Packaging: Innovation Trends',
    excerpt:
      'Latest trends in cosmetics packaging including luxury finishes, sustainable materials, and innovative designs.',
    content:
      'The cosmetics industry is constantly evolving. Explore emerging packaging trends, consumer preferences, and how to stay ahead of the competition with innovative designs.',
    author: 'David Chen',
    date: '2024-11-01',
    category: 'Industry Trends',
    readTime: '9 min',
  },
  {
    id: 5,
    title: 'Minimum Order Quantities: Finding the Right Balance',
    excerpt:
      'Understanding MOQs and how to negotiate flexible quantities for your packaging needs.',
    content:
      'Minimum order quantities can be a barrier for new brands. Learn negotiation strategies, economies of scale, and how to find manufacturing partners that align with your business growth.',
    author: 'Hassan Al Ketbi',
    date: '2024-10-28',
    category: 'Business Strategy',
    readTime: '6 min',
  },
  {
    id: 6,
    title: 'Regulatory Compliance for Food and Beverage Packaging',
    excerpt:
      'Navigate food safety regulations, labeling requirements, and compliance standards across different markets.',
    content:
      'Food and beverage packaging involves strict regulations. Understand FDA requirements, international standards, labeling compliance, and how to ensure your products meet all regulatory requirements.',
    author: 'Layla Al Mansouri',
    date: '2024-10-20',
    category: 'Regulations',
    readTime: '11 min',
  },
]

// export const metadata = {
//   title: 'Blog | Zuohan Trading',
//   description:
//     'Expert articles on contract packaging, private label manufacturing, and packaging innovation from Zuohan Trading.',
// }

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  const categories = [...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === selectedPost)
    return (
      <div>
        {/* Article Header */}
        <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom max-w-3xl relative z-10">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-4 inline-flex items-center gap-1 text-accent hover:text-accent-light transition-colors"
            >
              ← Back to Blog
            </button>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-200">
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm border border-accent/30">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                {post.author}
              </div>
              <div>{post.readTime} read</div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="bg-background">
          <div className="container-custom max-w-3xl">
            <div className="relative h-96 rounded-lg overflow-hidden bg-slate-800 my-8 border border-border">
              <img
                src={`/generic-blog-icon.png?key=blog${post.id}`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl">
            <div className="prose prose-lg">
              <p className="text-secondary leading-relaxed mb-4">{post.content}</p>
              <p className="text-secondary leading-relaxed">
                This comprehensive overview of {post.title.toLowerCase()} reflects industry best practices and insights from our team of packaging experts. For customized guidance tailored to your specific project, contact our specialists today.
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-border pt-8">
              <h3 className="mb-6 text-2xl font-bold text-white">Related Articles</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {blogPosts
                  .filter((p) => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      onClick={() => setSelectedPost(relatedPost.id)}
                      className="cursor-pointer rounded-lg border border-border bg-slate-800/50 p-4 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all"
                    >
                      <p className="mb-2 text-xs font-semibold text-accent">{relatedPost.category}</p>
                      <h4 className="font-semibold text-white hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="mt-2 text-xs text-secondary">{relatedPost.readTime} read</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="mb-8 text-gray-100">
              Contact our team for personalized packaging and manufacturing solutions.
            </p>
            <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground font-semibold">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h1 className="mb-6 text-5xl font-bold">Packaging & Manufacturing Insights</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-100">
            Expert articles on contract packaging, private label manufacturing, and industry trends.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-padding bg-background border-b border-border sticky top-24 z-40">
        <div className="container-custom">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-muted" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full rounded-lg border border-border bg-slate-800 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-primary text-white'
                    : 'border border-border text-secondary hover:border-accent'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'border border-border text-secondary hover:border-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-secondary">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-gradient-to-br from-slate-800 to-slate-900 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-700">
                    <img
                      src={`/generic-blog-icon.png?key=blog${post.id}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-3 right-3 inline-block rounded-full bg-accent text-xs font-semibold text-foreground px-3 py-1">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-secondary line-clamp-2">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-secondary">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div>{post.readTime}</div>
                    </div>

                    {/* Read More */}
                    <button className="mt-4 inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="mb-4 text-secondary">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory(null)
                }}
                className="button-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Informed</h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-100">
            Subscribe to our newsletter for the latest packaging trends, manufacturing insights, and industry updates.
          </p>
          <div className="mx-auto max-w-md flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="button-primary bg-accent hover:bg-accent-light text-foreground font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
