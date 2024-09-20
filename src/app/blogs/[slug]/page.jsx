import React from 'react';

const page = ({params}) => {
    const {title,description} = blogs.find((blog)=> blog.slug == params.slug)
    return (
        <div>
            <h5>{title}</h5>
            <h5>{description}</h5>
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

export default page;