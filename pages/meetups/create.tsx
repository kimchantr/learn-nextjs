import Head from 'next/head'
import { useRouter } from 'next/router'
import AddMeetupForm from '../../components/meetup/AddMeetupForm'
import { Meetup } from '../../models'

function MeetupCreatePage() {
  const router = useRouter()

  const handleAddMeetupFormSubmit = async (formValues: Meetup) => {
    const response = await fetch('/api/meetups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })

    const responseJSON = await response.json()
    console.log(responseJSON)

    router.push('/meetups')
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>

      <AddMeetupForm onSubmit={handleAddMeetupFormSubmit} />
    </>
  )
}

export default MeetupCreatePage
