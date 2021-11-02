import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>24h DEV</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/meetups">
              <a>All Meetups</a>
            </Link>
          </li>

          <li>
            <Link href="/meetups/create">
              <a>Add New Meetup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
