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
  isHome?: boolean;
  isHighlight?: boolean;
}

export default function NavLink({ link, text, isHome, isHighlight }: NavLinkProps) {

  return (
    <Link
      href={link}
      className={styles.link}
    >
      <div className={styles.checkboxContainer}>        
        <Image 
          src={check} 
          alt="Check icon"
          className={isHighlight ? `${styles.check} ${styles.highlight}` : styles.check}
        />
        {isHome &&
          <Image 
            src={check} 
            alt="Check icon"
            className={isHome ? `${styles.check} ${styles.isHome}` : styles.check}
          />
        }
        <Image 
          src={checkbox} 
          alt="Checkbox icon"
        />
      </div>
      <p className={isHome ? `${styles.linkText} ${styles.isHome}`: isHighlight ? `${styles.linkText} ${styles.highlight}` : styles.linkText }>
        {text}
      </p>
    </Link>
  )
}
