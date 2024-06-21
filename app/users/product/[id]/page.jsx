async function getProduct(id) {
const res = await fetch("https://jsonplaceholder.typicode.com/posts" + id, {
next: {
revalidate: 60,
},
});
return res.json();
}

export default async function ProductCardDetail({ params }) {
const product = await getProduct(params.id);

return (
<main>
  <nav>
    <h2>Product Detail</h2>
  </nav>
  <div className="card">
    <p className="text-[black]">{product.id}</p>
  </div>
</main>
);
}