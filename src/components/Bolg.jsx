import React from 'react'

const blogs = [
  {
    id: 1,
    title: "How I Became a Front-End Developer",
    date: "June 15, 2025",
    summary: "In this post, I share my journey from learning HTML/CSS to building full React apps.",
    link: "#"
  },
  {
    id: 2,
    title: "Top 5 Tips for Beginner Developers",
    date: "June 10, 2025",
    summary: "Here are five things I wish I knew when I started coding, especially for those just entering web development.",
    link: "#"
  },
  {
    id: 3,
    title: "Why Tailwind CSS Changed the Way I Code",
    date: "May 25, 2025",
    summary: "Tailwind CSS has revolutionized how I structure my components and design UI faster.",
    link: "#"
  }
];

const Bolg = () => {
  return (
   <>
    <section className="py-16 px-6 " id="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">📚 My Blog</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
              <p className="mb-4">{blog.summary}</p>
              <a href={blog.link} className="text-blue-600 font-semibold hover:underline">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}

export default Bolg