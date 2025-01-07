import React from "react";

async function page() {
  const data = await fetch("https://api.vercel.app/blog", {
    revalidate: 3600, 
  });
  const posts = await data.json();

  return (
    <>
      <h2>SSR, SSG and ISG/ISR</h2>
      <br />
      {posts.map((post) => (
        <div>
          <h5>{post.title}</h5>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}

export default page;
