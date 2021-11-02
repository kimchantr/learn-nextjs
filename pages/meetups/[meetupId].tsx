import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MeetupDetail } from '../../components/meetup'
import { Meetup } from '../../models'

export interface MeetupDetailPageProps {
  meetup: Meetup
}

function MeetupDetailPage({ meetup }: MeetupDetailPageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>

      <MeetupDetail meetup={meetup} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://json-server-kctrnn.herokuapp.com/api/meetups?_page=1')
  const { data } = await response.json()

  return {
    paths: data.map((meetup: Meetup) => ({ params: { meetupId: meetup.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<MeetupDetailPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const meetupId = params?.meetupId
  if (!meetupId) return { notFound: true }

  const res = await fetch(`https://json-server-kctrnn.herokuapp.com/api/meetups/${meetupId}`)
  const meetup = await res.json()

  return {
    props: {
      meetup,
    },
  }
}

export default MeetupDetailPage
