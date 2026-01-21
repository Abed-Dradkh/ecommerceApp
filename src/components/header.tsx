import Link from "next/link";
import { Package2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ShoppingCartDrawer } from "./shopping-cart";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">ShopWave</span>
        </Link>
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <ShoppingCartDrawer />
        </nav>
      </div>
    </header>
  );
}
