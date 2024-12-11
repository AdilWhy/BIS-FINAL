import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Dashboard } from "@/components/dashboard"
import { InventoryManagement } from "@/components/inventory-management"
import { RecipeSuggestions } from "@/components/recipe-suggestions"

export const metadata: Metadata = {
  title: "FridgeApp",
  description: "Manage your kitchen inventory and plan meals effectively.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto p-4">
          <Tabs defaultValue="dashboard" className="space-y-4">
            <TabsList>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="recipes">Recipes</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>
            <TabsContent value="inventory">
              <InventoryManagement />
            </TabsContent>
            <TabsContent value="recipes">
              <RecipeSuggestions />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

