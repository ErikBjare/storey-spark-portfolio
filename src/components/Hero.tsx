
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
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
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative rounded-xl overflow-hidden w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-scale-in">
              <img
                alt="Margaret-Anne Storey"
                className="object-cover w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Placeholder.png"
                style={{
                  aspectRatio: "1/1",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
