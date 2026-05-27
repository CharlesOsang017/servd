import { Button } from "@/components/ui/button"
import { Package, Plus } from "lucide-react"

const PantryPage = () => {
  return (
      <div className="min-h-screen bg-stone-50 pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Package className="w-16 h-16 text-orange-600" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                  My Pantry
                </h1>
                <p className="text-stone-600 font-light">
                  Manage your ingredients and discover what you can cook
                </p>
              </div>
            </div>

             {/* Add to Pantry Button - Desktop */}
            <Button
              className="hidden md:flex bg-orange-600 hover:bg-orange-700 text-white gap-2 cursor-pointer"
              size="lg"
            >
              <Plus className="w-5 h-5" />
              Add to Pantry
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PantryPage