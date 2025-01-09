import Link from "next/link"

const Footer = () => {
  return (
    <footer className="max-container padding-container py-5 flex-between max-md:flex-col gap-6">
      <p className="text-16-medium text-secondary-gray-500">&copy; { new Date().getFullYear() } Classdrift</p>
      <div className="flex gap-4">
        <Link href="/terms" aria-label="terms & conditions" className="text-16-medium text-secondary-gray-500" >Terms of Service</Link>
        <Link href="/terms" aria-label="terms & conditions" className="text-16-medium text-secondary-gray-500" >Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer
