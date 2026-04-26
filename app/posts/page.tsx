import Link from "next/link"

{/* to create a server component include async so you can just use await inside it */}
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  {/*const data = await res.json()*/}
  const posts = await res.json()

  return (
    <section>
      <h1>Blog Posts</h1>

      {/*
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      */}

      <ul className="max-w-3xl m-auto p-2.5">
        {posts.map((post: any) => (
          <li key={post.id} className="p-4 mb-2.5 bg-white hover:bg-gray-100 border-2 rounded-2xl">
            <Link href={`/posts/${post.id}`}><h2>{ post.title }</h2></Link>
          </li>
        ))}
      </ul>
    </section>
  )
}