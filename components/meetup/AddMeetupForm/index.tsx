import { FormEvent, useRef } from 'react'
import { Meetup } from '../../../models'
import { Card } from '../../common'
import styles from './AddMeetupForm.module.css'

export interface AddMeetupFormProps {
  onSubmit: (values: Meetup) => void
}

function AddMeetupForm({ onSubmit }: AddMeetupFormProps) {
  const titleInputRef = useRef<HTMLInputElement | null>(null)
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const addressInputRef = useRef<HTMLInputElement | null>(null)
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null)

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    const title = titleInputRef.current?.value || ''
    const image = imageInputRef.current?.value || ''
    const address = addressInputRef.current?.value || ''
    const description = descriptionInputRef.current?.value || ''

    const formValues: Meetup = {
      title,
      image,
      address,
      description,
    }

    onSubmit(formValues)
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows={5} ref={descriptionInputRef}></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default AddMeetupForm
