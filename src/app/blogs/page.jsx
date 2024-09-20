import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className='p-24'>
            {
                blogs.map((blog) => <div key={blog.slug} className='border-2 p-12'>
                    <h3>{blog.title}</h3>
                    <h3>{blog.description}</h3>
                    <button className='bg-red-500 p-2'>
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>
                </div>)
            }
        </div>
    );
};

const blogs = [
    {
      slug: "intro-to-react",
      title: "Introduction to React",
      description: "A beginner's guide to getting started with React, covering basic concepts and setup."
    },
    {
      slug: "advanced-javascript",
      title: "Advanced JavaScript Techniques",
      description: "Explore advanced concepts in JavaScript, including closures, async programming, and prototypes."
    },
    {
      slug: "css-grid-flexbox",
      title: "Mastering CSS Grid and Flexbox",
      description: "Learn how to create responsive layouts with CSS Grid and Flexbox, with practical examples."
    },
    {
      slug: "node-express-api",
      title: "Building RESTful APIs with Node.js and Express",
      description: "Step-by-step guide to building RESTful APIs using Node.js and Express, from setup to deployment."
    },
    {
      slug: "mongodb-crud",
      title: "CRUD Operations in MongoDB",
      description: "A comprehensive tutorial on performing Create, Read, Update, and Delete operations in MongoDB."
    }
  ];
  
  

export default BlogsPage;