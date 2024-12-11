import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from 'lucide-react'

export function InventoryManagement() {
  const categories = [
    { name: "Vegetables", icon: "🥕", items: ["Carrots", "Broccoli", "Spinach"] },
    { name: "Fruits", icon: "🍎", items: ["Apples", "Bananas", "Oranges"] },
    { name: "Dairy", icon: "🥛", items: ["Milk", "Cheese", "Yogurt"] },
    { name: "Meats", icon: "🍗", items: ["Chicken", "Beef", "Fish"] },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Management</CardTitle>
        <CardDescription>Manage your fridge inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input placeholder="Search products" className="flex-1" />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {category.items.map((item) => (
                    <li key={item} className="flex justify-between items-center">
                      {item}
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500" title="Fresh"></span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

