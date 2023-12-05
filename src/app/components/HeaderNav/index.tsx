import Link from 'next/link'

export default function HeaderNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {/* <Link href="#1">Home</Link> */}
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
