
import React from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a href="#" className="text-lg font-medium">
            Margaret-Anne Storey
          </a>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-1">
          <a
            href="#about"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            About
          </a>
          <a
            href="#timeline"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            Timeline
          </a>
          <a
            href="#space"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            SPACE Framework
          </a>
          <a
            href="#publications"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            Publications
          </a>
          <a
            href="#awards"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            Awards
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
