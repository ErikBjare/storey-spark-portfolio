
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Prof. Margaret-Anne Storey
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Pioneering Human & Social Aspects of Software Engineering
            </p>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Professor at the University of Victoria, renowned researcher in software engineering, 
            and creator of the SPACE framework for developer productivity.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-research-indigo hover:bg-research-indigo/90" asChild>
              <a href="#publications">View Publications</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#space">Explore SPACE Framework</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
