import React from "react";

const page = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" } // without this it changes from SSR to SSG
    // {next: {revalidate: 10}} // tthis combines SSR and SSG
  );
  const data = await res.json();

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default page;

// data fetching
//1. Server Side Rendering (SSR)
//2. Static Site Generation (SSG)
//3. Incremental Static Generation (ISR)
