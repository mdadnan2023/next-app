import Link from 'next/link'
import Navbar from "./components/navbar/navbar"
import Homepage from "./components/homepage/homepage"





export default function Home() {
  return (
    <main>
        <Navbar />
        <Homepage />
        {/* <Link className='btn btn-outline btn-primary' href="/users">go to user page</Link>
        <Link className='btn btn-outline btn-secondary' href="/users/product">product page</Link> */}
    </main>
  )
}
