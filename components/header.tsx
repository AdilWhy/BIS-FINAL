import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">FridgeApp</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

