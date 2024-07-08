'use client'

import { useState, useEffect } from 'react'
 
function ProductPage() {
  const [menu, setMenu] = useState([])
  // const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://birlatyres.viaconprojects.com:1337/api/header')
      .then((res) => res.json())
      .then((header) => {
        setMenu(header.data.attributes.button)
        console.log(menu)
        // setLoading(false)
      })
  }, [])
 
  // if (isLoading) return <p>Loading...</p>

 
  return (
    <div>
      <div>
        {menu.map(menu=>
        <h2 style={{color:`${menu.color}`}}>{menu.title}</h2>
      )}
      </div>

    </div>
  )
}
export default ProductPage