import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import ColoredLine from '../ui/ColoredLine'

const Navbar = () => {
  return (
    <>
      <ColoredLine/>
      <nav className='max-container padding-container flex-between py-5'>
        <Link href="/" aria-label='logo'>
          <Image src="/logo.png" alt='logo' width={128} height={74}/>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login" aria-label='login' className="text-16-regular">Login</Link>
          <Button variant="default">Try for free</Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
