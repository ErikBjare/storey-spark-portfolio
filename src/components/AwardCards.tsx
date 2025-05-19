
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Building, BookOpen, Users } from "lucide-react";
import { awardsData, Award as AwardType } from "@/data/awardsData";

type FilterCategory = 'all' | 'research' | 'teaching' | 'service' | 'industry';

const AwardCards = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredAwards = awardsData.filter(
    (award) => filter === 'all' || award.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'research':
        return <BookOpen className="h-5 w-5" />;
      case 'teaching':
        return <Users className="h-5 w-5" />;
      case 'service':
        return <Award className="h-5 w-5" />;
      case 'industry':
        return <Building className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'research':
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
      case 'teaching':
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case 'service':
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
      case 'industry':
        return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="awards" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Awards & Recognition
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[700px]">
            Honoring Prof. Storey's contributions to software engineering research and education
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={filter === 'all' ? "default" : "outline"}
            onClick={() => setFilter('all')}
            className="text-sm"
          >
            All Awards
          </Button>
          <Button
            variant={filter === 'research' ? "default" : "outline"}
            onClick={() => setFilter('research')}
            className="text-sm"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Research
          </Button>
          <Button
            variant={filter === 'teaching' ? "default" : "outline"}
            onClick={() => setFilter('teaching')}
            className="text-sm"
          >
            <Users className="h-4 w-4 mr-2" />
            Teaching
          </Button>
          <Button
            variant={filter === 'service' ? "default" : "outline"}
            onClick={() => setFilter('service')}
            className="text-sm"
          >
            <Award className="h-4 w-4 mr-2" />
            Service
          </Button>
          <Button
            variant={filter === 'industry' ? "default" : "outline"}
            onClick={() => setFilter('industry')}
            className="text-sm"
          >
            <Building className="h-4 w-4 mr-2" />
            Industry
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award) => (
            <Card key={award.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className={`p-3 flex items-center gap-3 ${getCategoryColor(award.category)}`}>
                {getCategoryIcon(award.category)}
                <span className="font-medium">{award.category.charAt(0).toUpperCase() + award.category.slice(1)}</span>
              </div>
              <CardHeader>
                <CardTitle>{award.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {award.organization} ({award.year})
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardCards;
