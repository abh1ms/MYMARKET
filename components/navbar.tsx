import Link from 'next/link';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@/components/ui/menu';
import { Burger } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border/50 px-4 py-3 sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl">My Market</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/delivery" className="text-muted-foreground hover:text-primary transition-colors">
            Delivery
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Menu asChild className="relative">
            <MenuTrigger
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 focus:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-very-ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Burger className="h-4 w-4" />
              <span className="hidden md:block">Menu</span>
            </MenuTrigger>
            <MenuContent className="w-48 bg-popover border border-border/50 rounded-md shadow-md p-2 z-50">
              <MenuItem>
                <Link href="/" className="block w-full text-left">
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories" className="block w-full text-left">
                  Categories
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about" className="block w-full text-left">
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/delivery" className="block w-full text-left">
                  Delivery
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/contact" className="block w-full text-left">
                  Contact
                </Link>
              </MenuItem>
            </MenuContent>
          </Menu>
        </div>
      </div>
    </nav>
  );
}