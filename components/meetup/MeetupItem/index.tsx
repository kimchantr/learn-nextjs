import Image from 'next/image'
import { useRouter } from 'next/router'
import { Meetup } from '../../../models'
import { Card } from '../../common'
import styles from './MeetupItem.module.css'

export interface MeetupItemProps {
  meetup: Meetup
}

export function MeetupItem({ meetup }: MeetupItemProps) {
  const router = useRouter()

  const handleShowDetailClick = () => {
    router.push({
      pathname: '/meetups/[meetupId]',
      query: {
        meetupId: meetup.id,
      },
    })
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image src={meetup.image} alt={meetup.title} layout="fill" />
        </div>

        <div className={styles.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>

        <div className={styles.actions}>
          <button onClick={handleShowDetailClick}>Show detail</button>
        </div>
      </Card>
    </li>
  )
}
