import React from "react";

const getProduct = async () => {
    const res= await fetch("https://jsonplaceholder.typicode.com/posts" +id,);
    const posts = await res.json();
}

export default async function ProductCardDetail({ params }) {
  const post = await getProduct(params.id);

  return (
    <div className="card">
      <p className="text-[black]">{post.title}</p>
    </div>
  );
}
