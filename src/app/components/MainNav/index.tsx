import Link from 'next/link'
import Image from 'next/image'
import grip from '@/app/assets/grip.svg'
import checkbox from '@/app/assets/checkbox.svg'
import check from '@/app/assets/check.svg'

export default function MainNav() {
  return (
    <div>
      <Image src={grip} alt="" />

      <div>
        <h1>SADiE LEE</h1>
      </div>

      <nav>
        <ul>
          <li>
            <div>
              <Image src={check} alt="" />
              <Image src={checkbox} alt="" />
            </div>
            <Link href="/">about</Link>
          </li>
          <li>
            <div>
              <Image src={check} alt="" />
              <Image src={checkbox} alt="" />
            </div>
            <Link href="/about">work</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
