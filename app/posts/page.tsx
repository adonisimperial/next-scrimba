{/* to create a server component include async so you can just use await inside it */}
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  return (
    <section>
      <h1>Posts go here</h1>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </section>
  )
}