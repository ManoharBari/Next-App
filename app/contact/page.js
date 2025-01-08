"use client";
import React, { useState } from "react";

function page() {
  const [post, setpost] = useState([]);

  async function click() {
    const data = await fetch("https://api.vercel.app/blog", {
      revalidate: 3600,
    });
    const posts = await data.json();
    setpost(posts);
  }

  return (
    <>
      <h2>SSR, SSG and ISG/ISR</h2>
      <br />
      <button onClick={click}>click me</button>
      {post.map((blog) => (
        <div>
          <h5>{blog.title}</h5>
          <p>{blog.content}</p>
          <style jsx global>
            {`
              h5 {
                color: red;
              }
              p {
                color: yellow;
              }
            `}
          </style>
        </div>
      ))}
    </>
  );
}

export default page;
