import { getAllModels } from "@/app/lib/models"
import type { Model } from "@/app/types"
import ModelCard from "@/app/components/ModelCard"

export default async function ModelsPage() {
  const models = await getAllModels()
  return (
    <section>
      <h1>3D Models Page</h1>

      {/* {models.map((model: Model) => <p key={model.id}>{model.name}</p>)} */}
      {models.map((model: Model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </section>
  )
}