import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'



export default function Home() {
  return (
    <main>
      <Link className='btn btn-outline btn-primary' href="/users">go to user page</Link>
      <ProductCard/>
      <Link className='btn btn-outline btn-secondary' href="/users/product">product page</Link>
    </main>
  )
}
