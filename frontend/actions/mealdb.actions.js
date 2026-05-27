"use server";

const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";

export const getRecipeOfTheDay = async () => {
  try {
    const res = await fetch(`${MEALDB_BASE}/random.php`, {
      next: { revalidate: 86400 }, // cache for 24 hours
    });
    if (!res.ok) {
      throw new Error("Failed to fetch recipe of the day");
    }
    const data = await res.json();
    return {
      success: true,
      recipe: data.meals[0],
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Failed to fetch recipe of the day",
    };
  }
};
export const getCategories = async () => {
    try {
        const res = await fetch(`${MEALDB_BASE}/list.php?c=list`,{
            next: {revalidate: 604800}, // cache for 1 week (categories rarley change)
        })
        if(!res.ok){
            throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        return {
            success: true,
            categories: data.meals || []
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: "Failed to fetch categories"
        }
    }
};
export const getAreas = async () => {
    try {
        const res = await fetch(`${MEALDB_BASE}/list.php?a=list`,{
            next: {revalidate: 604800}, // cache for 1 week (areas rarley change)
        })
        if(!res.ok){
            throw new Error("Failed to fetch areas");
        }
        const data = await res.json();
        return {
            success: true,
            areas: data.meals || []
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: "Failed to fetch areas"
        }
    }
};
export const getMealsByCategory = async (category) => {
    try {
        const res = await fetch(`${MEALDB_BASE}/filter.php?c=${category}`,{
            next: {revalidate: 86400}, // cache for 24 hours
        })
        if(!res.ok){
            throw new Error("Failed to fetch meals by category");
        }
        const data = await res.json();
        return {
            success: true,
            meals: data.meals || [],
            category
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: "Failed to fetch meals by category"
        }
    }
};
export const getMealsByArea = async (area) => {
    try {
        const res = await fetch(`${MEALDB_BASE}/filter.php?a=${area}`,{
            next: {revalidate: 86400}, // cache for 24 hours
        })
        if(!res.ok){
            throw new Error("Failed to fetch meals by area");
        }
        const data = await res.json();
        return {
            success: true,
            meals: data.meals || [],
            area
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: "Failed to fetch meals by area"
        }
    }
};
