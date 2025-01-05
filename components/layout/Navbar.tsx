import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='max-container padding-container'>
      <Link href="/" aria-label='logo'>
        <Image src="/logo.png" alt='logo' width={74} height={48}/>
      </Link>
      <div>
        <Link href="/login" aria-label='login'>Login</Link>
        
      </div>
    </nav>
  )
}

export default Navbar
