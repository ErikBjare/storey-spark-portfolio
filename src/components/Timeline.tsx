
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TimelineEvent, timelineData } from "@/data/timelineData";
import { Calendar, Award, BookOpen, Briefcase } from "lucide-react";

type FilterCategory = 'all' | 'research' | 'award' | 'publication' | 'career';

const Timeline = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredEvents = timelineData
    .filter((event) => filter === 'all' || event.category === filter)
    .sort((a, b) => b.year - a.year);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'research':
        return <Calendar className="h-4 w-4 mr-2" />;
      case 'award':
        return <Award className="h-4 w-4 mr-2" />;
      case 'publication':
        return <BookOpen className="h-4 w-4 mr-2" />;
      case 'career':
        return <Briefcase className="h-4 w-4 mr-2" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'research':
        return 'border-blue-500 dark:border-blue-400';
      case 'award':
        return 'border-amber-500 dark:border-amber-400';
      case 'publication':
        return 'border-green-500 dark:border-green-400';
      case 'career':
        return 'border-purple-500 dark:border-purple-400';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <section id="timeline" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">Research Timeline</h2>
          <p className="text-muted-foreground md:text-lg max-w-[700px]">
            Exploring the key milestones in Prof. Storey's academic and research journey
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button 
            variant={filter === 'all' ? "default" : "outline"} 
            onClick={() => setFilter('all')}
            className="text-sm"
          >
            All
          </Button>
          <Button 
            variant={filter === 'research' ? "default" : "outline"} 
            onClick={() => setFilter('research')}
            className="text-sm"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Research
          </Button>
          <Button 
            variant={filter === 'award' ? "default" : "outline"} 
            onClick={() => setFilter('award')}
            className="text-sm"
          >
            <Award className="h-4 w-4 mr-2" />
            Awards
          </Button>
          <Button 
            variant={filter === 'publication' ? "default" : "outline"} 
            onClick={() => setFilter('publication')}
            className="text-sm"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Publications
          </Button>
          <Button 
            variant={filter === 'career' ? "default" : "outline"} 
            onClick={() => setFilter('career')}
            className="text-sm"
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Career
          </Button>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <Card className={`animate-fade-in opacity-0 border-l-4 ${getCategoryColor(event.category)}`} style={{animationDelay: `${index * 150 + 300}ms`, animationFillMode: 'forwards'}}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {index % 2 !== 0 && !getCategoryIcon(event.category)}
                        <h3 className="font-semibold">{event.title}</h3>
                        {index % 2 === 0 && getCategoryIcon(event.category)}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 md:translate-y-0 flex items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-primary z-10">
                  <span className="text-xs font-bold">{event.year}</span>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
