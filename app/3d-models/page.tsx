import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

/**
 * Challenge: Upgrade our form to a Form from Next.js
 */

export default async function Page({ searchParams }: ModelsPageProps) {
    const models = await getModels()
    const query = (await searchParams)?.query?.toLowerCase() || ""

    const filteredModels = query
        ? models.filter(model =>
            model.name.toLowerCase().includes(query) ||
            model.description.toLowerCase().includes(query)
        )
        : models

    return (
        <>
            <form className="w-full px-5 md:px-0 md:max-w-xl">
                <input
                    type="text"
                    name="query"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                    className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}

{/*
  import { getAllModels } from "@/app/lib/models"
import ModelsGrid from "../components/ModelsGrid"
{/* Moved to ModelsGrid component
import type { Model } from "@/app/types"
import ModelCard from "@/app/components/ModelCard"
*

export default async function ModelsPage() {
  const models = await getAllModels()

  {/* Moved to ModelsGrid component
  return (
    <section>
      <h1>3D Models Page</h1>

      {/* {models.map((model: Model) => <p key={model.id}>{model.name}</p>)}
      
      {models.map((model: Model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </section>
  )
  *

  {/* ModelsGrid Refactor *
  return <ModelsGrid title="3d Models" models={models} />
}
*/}