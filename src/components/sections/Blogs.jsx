import React from "react";

const blogs = [
  {
    title: "Understanding Web3: A Beginner’s Guide",
    excerpt: "Explore the basics of Web3, smart contracts, and decentralized applications (dApps) in this beginner-friendly article.",
    tags: ["Blockchain", "Web3", "Solidity"],
    link: "#",
  },
  {
    title: "Next.js vs React: What to Choose in 2025?",
    excerpt: "A detailed comparison between Next.js and React for modern frontend development in 2025.",
    tags: ["React", "Next.js", "Frontend"],
    link: "#",
  },
  {
    title: "Optimizing Tailwind CSS for Production",
    excerpt: "Learn best practices to reduce file size and improve performance in Tailwind CSS projects.",
    tags: ["Tailwind CSS", "Performance", "Optimization"],
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="px-4 sm:px-10 md:px-20 py-20">
      <h2 className="text-4xl font-semibold mb-12 px-2">My Blogs</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{blog.excerpt}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {blog.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={blog.link}
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
