import { getAllModels } from "@/app/lib/models"
import type { Model } from "@/app/types"

export default async function ModelsPage() {
  const models = await getAllModels()
  return (
    <section>
      <h1>3D Models Page</h1>

      {models.map((model: Model) => <p key={model.id}>{model.name}</p>)}
    </section>
  )
}