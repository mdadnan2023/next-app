'use client';
import React from 'react'
import Link from 'next/link';

const AddToCart = () => {

function handleClick() {
alert("new");
}
return (
<>
  <button onClick={()=>handleClick()} className="btn btn-outline btn-error">
    Add to cart
  </button>
</>
)
}
export default AddToCart