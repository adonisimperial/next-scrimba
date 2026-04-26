import type { ModelDetailPageProps } from "@/app/types"
import { getModelById } from "@/app/lib/models"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  const { id } = await params
  const model = await getModelById(id)

  {/* This is a happy path so make secure in the production grade by checking if res is true T and using try and catch for errors */}
  return (
    <section>
      <h1>{model.name}</h1>
      <p>{model.description}</p>
    </section>
  )
}