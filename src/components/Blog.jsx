import React from "react";
import Container from "./container/Container";

const blogs = [
  {
    id: 1,
    title: "Building Secure Authentication with JWT in MERN Stack",
    description:
      "Learn how to implement JWT authentication using Node.js, Express.js, and MongoDB.",
    date: "15 Jul 2026",
    category: "Backend",
  },
  {
    id: 2,
    title: "React Performance Optimization Tips",
    description:
      "Improve your React application performance using memoization and lazy loading.",
    date: "10 Jul 2026",
    category: "React",
  },
  {
    id: 3,
    title: "MongoDB Schema Design Best Practices",
    description:
      "Discover how to design scalable MongoDB schemas for production applications.",
    date: "05 Jul 2026",
    category: "Database",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-3" id="blog">
      <Container>
        <div className="relative mb-16">
          <h1 className="lg:text-9xl text-7xl font-bold text-center opacity-10">
            BLOGS
          </h1>

          <h2 className="absolute lg:top-[40px] top-[25px] left-1/2 -translate-x-1/2 lg:text-6xl text-2xl font-main underline text-[#3BB9FF]">
            My <span className="text-black">Blogs</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border-2 border-[#3BB9FF] rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-[#3BB9FF]/40 hover:shadow-2xl duration-300"
            >
              <div className="flex justify-between mb-4">
                <span className="bg-[#3BB9FF] text-white px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </span>

                <span className="text-gray-500 text-sm">
                  {blog.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {blog.description}
              </p>

              <button className="px-5 py-2 border border-[#3BB9FF] text-[#3BB9FF] rounded-full hover:bg-[#3BB9FF] hover:text-white duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;