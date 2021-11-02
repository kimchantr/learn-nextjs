import { useRouter } from 'next/dist/client/router'

function PostDetailPage() {
  const router = useRouter()

  return (
    <div>
      <h1>Post detail page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}

export default PostDetailPage
