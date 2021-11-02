import { ReactNode } from 'react'
import { Header } from '../common'
import styles from './Main.module.css'

export interface LayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
