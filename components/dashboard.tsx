import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from 'lucide-react'

export function Dashboard() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Overview of your fridge inventory and quick actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input placeholder="Search recipes or products" className="flex-1" />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You have 23 items in your fridge</p>
                <p className="text-red-500">3 items are expiring soon</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
                <Button variant="outline">View Recipes</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Meal Suggestion</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Based on your inventory: Chicken Stir Fry</p>
                <Button variant="link">View Recipe</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

