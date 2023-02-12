import Link from "next/link"

function Header() {
  return (
    <header className="flex gap-3 p-5 font-semibold bg-blue-500">
      <Link href="/" className="px-2 py-1 text-blue-500 bg-white rounded-lg">
        Home
      </Link>
      <Link href="/todos/" className="px-2 py-1 text-blue-500 bg-white rounded-lg">
        TODOs
      </Link>
      <Link href="/search/" className="px-2 py-1 text-blue-500 bg-white rounded-lg">
        Search
      </Link>
    </header>
  )
}
export default Header