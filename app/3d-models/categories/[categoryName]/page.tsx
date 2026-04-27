{/*
  import type { CategoryPageProps } from "@/app/types"
import { getCategoryBySlug } from "@/app/lib/categories"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)
  console.log(category)
  return <h1>{category.displayName}</h1>
}
*/}

import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)
  const models = await getModels({ category: categoryName })

  return <ModelsGrid title={category.displayName} models={models} />
}