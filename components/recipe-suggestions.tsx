import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function RecipeSuggestions() {
  const recipes = [
    { name: "Chicken Stir Fry", time: "30 min", image: "/placeholder.svg?height=100&width=200" },
    { name: "Vegetable Pasta", time: "25 min", image: "/placeholder.svg?height=100&width=200" },
    { name: "Fruit Smoothie", time: "10 min", image: "/placeholder.svg?height=100&width=200" },
    { name: "Beef Tacos", time: "35 min", image: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recipe Suggestions</CardTitle>
        <CardDescription>Discover recipes based on your inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input placeholder="Search recipes" className="flex-1" />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <Card key={recipe.name}>
              <img src={recipe.image} alt={recipe.name} className="w-full h-32 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold">{recipe.name}</h3>
                <p className="text-sm text-gray-500">{recipe.time}</p>
                <Button variant="link" className="p-0">View Recipe</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

