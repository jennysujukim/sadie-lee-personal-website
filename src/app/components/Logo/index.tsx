import Link from "next/link"
import Image from "next/image"
// assets
import logo from '@/app/assets/logo.svg'
// styles
import styles from './Logo.module.css'

type LogoProps = {
  isLink: boolean;
  style?: React.CSSProperties;
}

export default function Logo({ isLink, style }: LogoProps) {
  return (
    <>
      {isLink ? (
        <Link
          href='/'
          className={styles.logoContainer}
        >
          <Image 
            className={styles.logo}
            src={logo}
            alt="Sadie Lee logo"
          />
        </Link>
      ) : (
        <div 
          className={styles.logoContainer} 
          style={style}
        >
          <Image 
            className={styles.logo}
            src={logo}
            alt="Sadie Lee logo"
          />
        </div>
      )}
    </>
  )
}
