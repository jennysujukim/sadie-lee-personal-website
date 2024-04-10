import Link from "next/link"
import Image from "next/image"
// assets
import checkbox from '@/app/assets/checkbox.svg'
import check from '@/app/assets/check.svg'
// styles
import styles from './NavLink.module.css'

type NavLinkProps = {
  link: string;
  text: string;
}

export default function NavLink({ link, text }: NavLinkProps) {
  return (
    <Link
      href={link}
      className={styles.link}
    >
      <div className={styles.checkboxContainer}>
        <Image 
          src={check} 
          alt="Check icon"
          className={styles.check}
        />
        <Image 
          src={checkbox} 
          alt="Checkbox icon"
        />
      </div>
      <p className={styles.linkText}>
        {text}
      </p>
    </Link>
  )
}
