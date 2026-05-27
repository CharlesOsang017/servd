"use client"
import { getMealsByArea } from '@/actions/mealdb.actions';
import RecipeGrid from '@/components/RecipeGrid';
import { useParams } from 'next/navigation'


const CuisinePage = () => {
    const params = useParams();
    const cuisine = params.cuisine;

  return (
    <RecipeGrid
    type='cuisine'
    value={cuisine}
    fetchAction={getMealsByArea}
    backLink="/dashboard"
    />
  )
}

export default CuisinePage