import { ModelDetailPageProps } from "@/app/types"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  const { id } = await params
  {/*
  console.log(id)
  return <h1>The id of this model is { id }</h1>
  */}

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  {/* This is a happy path so make secure in the production grade by checking if res is true T and using try and catch for errors */}
  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </div>
  )
}