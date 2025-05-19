
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SpaceFramework from "@/components/SpaceFramework";
import PublicationExplorer from "@/components/PublicationExplorer";
import AwardCards from "@/components/AwardCards";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Timeline />
        <SpaceFramework />
        <PublicationExplorer />
        <AwardCards />
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
            <p className="text-sm text-muted-foreground">
              Demo portfolio for Prof. Margaret-Anne Storey
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <a href="https://lovable.dev" className="text-primary hover:underline">Lovable</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
