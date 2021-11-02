import { MeetupItem } from '..'
import { Meetup } from '../../../models'
import styles from './MeetupList.module.css'

export interface MeetupListProps {
  meetups: Meetup[]
}

export function MeetupList({ meetups }: MeetupListProps) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  )
}
