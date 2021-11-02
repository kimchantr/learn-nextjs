import Image from 'next/image'
import { Meetup } from '../../../models'
import styles from './MeetupDetail.module.css'

export interface MeetupDetailProps {
  meetup: Meetup
}

export function MeetupDetail({ meetup }: MeetupDetailProps) {
  return (
    <section className={styles.detail}>
      <div className={styles.image}>
        <Image src={meetup.image} alt={meetup.title} layout="fill" />
      </div>

      <h1>{meetup.title}</h1>

      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  )
}
