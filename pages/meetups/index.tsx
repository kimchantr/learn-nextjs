import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { MeetupList } from '../../components/meetup'
import { Meetup } from '../../models'

export interface MeetupListPageProps {
  meetups: Meetup[]
}

function MeetupListPage({ meetups }: MeetupListPageProps) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse a huge list of highly active meetups!" />
      </Head>

      <MeetupList meetups={meetups} />
    </>
  )
}

export const getStaticProps: GetStaticProps<MeetupListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch('https://json-server-kctrnn.herokuapp.com/api/meetups')
  const meetups = await res.json()

  return {
    props: {
      meetups,
    },
  }
}

export default MeetupListPage
