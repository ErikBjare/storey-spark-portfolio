
import React, { useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface SpaceDimension {
  dimension: string;
  fullName: string;
  value: number;
  description: string;
}

const SpaceFramework = () => {
  const [dimensions, setDimensions] = useState<SpaceDimension[]>([
    {
      dimension: "Satisfaction",
      fullName: "Satisfaction & Well-being",
      value: 70,
      description: "Developer satisfaction, happiness, and health"
    },
    {
      dimension: "Performance",
      fullName: "Performance",
      value: 80,
      description: "Outcome of work against goals and expectations"
    },
    {
      dimension: "Activity",
      fullName: "Activity",
      value: 75,
      description: "Actions and tasks performed while working"
    },
    {
      dimension: "Communication",
      fullName: "Communication & Collaboration",
      value: 65,
      description: "How people and teams work together"
    },
    {
      dimension: "Efficiency",
      fullName: "Efficiency & Flow",
      value: 60,
      description: "Work without delays or interruptions"
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleSliderChange = (index: number, newValue: number[]) => {
    const updatedDimensions = [...dimensions];
    updatedDimensions[index].value = newValue[0];
    setDimensions(updatedDimensions);
  };

  const radarData = dimensions.map((item) => ({
    dimension: item.dimension,
    value: item.value,
    fullMark: 100
  }));

  return (
    <section id="space" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            The SPACE Framework
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[700px] mb-4">
            Explore Professor Storey's framework for understanding developer productivity
          </p>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-[700px] mb-8">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 mx-auto">
                {isOpen ? "Hide" : "Show"} Framework Explanation
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 text-left bg-muted p-6 rounded-lg animate-accordion-down">
              <h3 className="font-bold text-xl mb-3">What is the SPACE Framework?</h3>
              <p className="mb-3">
                The SPACE Framework was developed by Professor Margaret-Anne Storey and her 
                collaborators at GitHub, Microsoft, and the University of Victoria to provide a more 
                holistic way of measuring and understanding developer productivity.
              </p>
              <p className="mb-3">
                SPACE stands for Satisfaction and well-being, Performance, Activity, Communication 
                and collaboration, and Efficiency and flow. The framework recognizes that productivity
                is multidimensional and cannot be measured by a single metric.
              </p>
              <h4 className="font-bold text-lg mb-2 mt-4">How to use this interactive demo:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Adjust the sliders to see how changes in each dimension affect the overall radar chart</li>
                <li>Explore the balance between different aspects of productivity</li>
                <li>Consider how these dimensions might apply to your own work environment</li>
              </ol>
              <div className="mt-4 p-4 bg-card border rounded-md">
                <p className="text-sm">
                  <span className="font-bold">Research impact:</span> The SPACE Framework has been widely 
                  adopted in industry and academia as a more nuanced approach to productivity measurement,
                  influencing how organizations think about developer experience and effectiveness.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Adjust SPACE Dimensions</CardTitle>
                <CardDescription>
                  Modify the sliders to see how different factors affect developer productivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dimensions.map((dimension, index) => (
                    <div key={dimension.dimension} className="space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{dimension.fullName}</h3>
                          <p className="text-sm text-muted-foreground">{dimension.description}</p>
                        </div>
                        <span className="text-lg font-semibold">{dimension.value}%</span>
                      </div>
                      <Slider
                        defaultValue={[dimension.value]}
                        max={100}
                        step={5}
                        onValueChange={(newValue) => handleSliderChange(index, newValue)}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[400px] bg-card rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="dimension" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="SPACE"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceFramework;
