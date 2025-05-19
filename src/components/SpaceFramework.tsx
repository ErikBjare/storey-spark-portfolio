
import React, { useState, useMemo } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, InfoIcon, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface SpaceDimension {
  dimension: string;
  fullName: string;
  value: number;
  description: string;
  insights: {
    low: string;
    medium: string;
    high: string;
  };
  recommendations: {
    low: string;
    medium: string;
    high: string;
  };
}

interface DimensionalBalance {
  label: string;
  description: string;
  recommendations: string;
}

const SpaceFramework = () => {
  const [dimensions, setDimensions] = useState<SpaceDimension[]>([
    {
      dimension: "Satisfaction",
      fullName: "Satisfaction & Well-being",
      value: 70,
      description: "Developer satisfaction, happiness, and health",
      insights: {
        low: "Low satisfaction often leads to burnout, high turnover, and reduced engagement.",
        medium: "Moderate satisfaction indicates basic needs are met but there's room for improvement.",
        high: "High satisfaction correlates with better retention, creativity, and intrinsic motivation."
      },
      recommendations: {
        low: "Focus on work-life balance, recognize achievements, and gather feedback on pain points.",
        medium: "Implement targeted improvements based on developer feedback and provide growth opportunities.",
        high: "Maintain the positive environment while finding ways to share successful practices with other teams."
      }
    },
    {
      dimension: "Performance",
      fullName: "Performance",
      value: 80,
      description: "Outcome of work against goals and expectations",
      insights: {
        low: "Low performance suggests misaligned goals, insufficient resources, or capability gaps.",
        medium: "Adequate performance indicates basic expectations are met but optimization is possible.",
        high: "High performance shows effective goal-setting, resource allocation, and capability utilization."
      },
      recommendations: {
        low: "Clarify expectations, provide targeted training, and remove organizational obstacles.",
        medium: "Fine-tune goal-setting processes and identify specific optimization opportunities.",
        high: "Share best practices, explore innovation opportunities, and consider raising the bar."
      }
    },
    {
      dimension: "Activity",
      fullName: "Activity",
      value: 75,
      description: "Actions and tasks performed while working",
      insights: {
        low: "Low activity metrics may indicate process obstacles, distractions, or unclear priorities.",
        medium: "Medium activity levels show adequate engagement but potential for more focused work.",
        high: "High activity suggests strong engagement, but check that it translates to outcomes."
      },
      recommendations: {
        low: "Identify and remove process blockers, clarify priorities, and minimize distractions.",
        medium: "Optimize workflows, reduce context-switching, and focus on highest-value activities.",
        high: "Ensure high activity translates to meaningful outcomes rather than just busyness."
      }
    },
    {
      dimension: "Communication",
      fullName: "Communication & Collaboration",
      value: 65,
      description: "How people and teams work together",
      insights: {
        low: "Poor communication creates silos, misunderstandings, and duplicated efforts.",
        medium: "Adequate communication enables basic coordination but may lack richness.",
        high: "Strong communication networks foster knowledge sharing, innovation, and alignment."
      },
      recommendations: {
        low: "Establish clear communication channels and regular sync points between teams.",
        medium: "Enhance knowledge sharing platforms and develop more cross-team collaborations.",
        high: "Focus on maintaining efficient communication while avoiding meeting overload."
      }
    },
    {
      dimension: "Efficiency",
      fullName: "Efficiency & Flow",
      value: 60,
      description: "Work without delays or interruptions",
      insights: {
        low: "Low efficiency indicates frequent context switching, interruptions, or process friction.",
        medium: "Moderate efficiency suggests some flow states are achieved but inconsistently.",
        high: "High efficiency demonstrates effective systems that protect focus time and flow."
      },
      recommendations: {
        low: "Implement no-meeting days, reduce interruptions, and streamline approval processes.",
        medium: "Optimize workflows, automate routine tasks, and create more space for deep work.",
        high: "Fine-tune existing systems and help other teams adopt successful practices."
      }
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [analysisTab, setAnalysisTab] = useState<'insights' | 'recommendations' | 'balance'>('insights');
  const [selectedDimension, setSelectedDimension] = useState<number | null>(null);

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

  const getDimensionLevel = (value: number): 'low' | 'medium' | 'high' => {
    if (value < 40) return 'low';
    if (value < 70) return 'medium';
    return 'high';
  };

  const dimensionalBalance = useMemo((): DimensionalBalance[] => {
    const results: DimensionalBalance[] = [];

    // Check for high satisfaction but low efficiency
    if (dimensions[0].value > 70 && dimensions[4].value < 40) {
      results.push({
        label: "High Satisfaction, Low Efficiency",
        description: "Teams may be comfortable but not optimizing their processes.",
        recommendations: "Look for process improvements without disrupting team culture."
      });
    }
    
    // Check for high performance but low satisfaction
    if (dimensions[1].value > 70 && dimensions[0].value < 40) {
      results.push({
        label: "High Performance, Low Satisfaction",
        description: "Productivity at the expense of developer well-being - risk of burnout.",
        recommendations: "Urgent need to address well-being concerns to sustain performance long-term."
      });
    }

    // Check for high activity but low performance
    if (dimensions[2].value > 70 && dimensions[1].value < 40) {
      results.push({
        label: "High Activity, Low Performance",
        description: "Busy work that doesn't translate to meaningful outcomes.",
        recommendations: "Refocus on value-generating activities and clear goal alignment."
      });
    }

    // Check for balanced profile
    const values = dimensions.map(d => d.value);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const maxDeviation = Math.max(...values.map(v => Math.abs(v - avg)));
    
    if (maxDeviation < 15) {
      results.push({
        label: "Balanced Profile",
        description: "All dimensions are relatively aligned, suggesting a holistic approach.",
        recommendations: avg > 70 
          ? "Maintain this balanced excellence across all dimensions."
          : "Consider proportional improvements across all dimensions."
      });
    }

    // Check for communication imbalance
    if (dimensions[3].value < 40 && (dimensions[1].value > 60 || dimensions[2].value > 60)) {
      results.push({
        label: "Communication Deficiency",
        description: "Activity or performance happening in silos with poor collaboration.",
        recommendations: "Strengthen cross-team communication channels and knowledge sharing."
      });
    }

    return results.length > 0 ? results : [{
      label: "Custom Analysis",
      description: "Adjust the sliders to see how changes in each dimension affect the overall developer experience.",
      recommendations: "Try creating different profiles to understand various team dynamics."
    }];
  }, [dimensions]);

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
                        onValueCommit={() => setSelectedDimension(index)}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[400px] bg-card rounded-lg p-4">
            <ChartContainer
              config={{
                space: { 
                  color: "hsl(var(--primary))"
                }
              }}
            >
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
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadarChart>
            </ChartContainer>
          </div>
        </div>

        <div className="mt-10">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Framework Analysis</CardTitle>
              <CardDescription>
                Insights based on your current dimension settings
              </CardDescription>
              <div className="flex space-x-1 rounded-lg bg-muted p-1 text-muted-foreground mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex-1 text-sm",
                    analysisTab === 'insights' && "bg-background text-foreground shadow"
                  )}
                  onClick={() => setAnalysisTab('insights')}
                >
                  Dimension Insights
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex-1 text-sm",
                    analysisTab === 'recommendations' && "bg-background text-foreground shadow"
                  )}
                  onClick={() => setAnalysisTab('recommendations')}
                >
                  Recommendations
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex-1 text-sm",
                    analysisTab === 'balance' && "bg-background text-foreground shadow"
                  )}
                  onClick={() => setAnalysisTab('balance')}
                >
                  Balance Analysis
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {analysisTab === 'insights' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      {selectedDimension !== null ? 
                        `Insights for ${dimensions[selectedDimension].fullName}:` : 
                        "Select a dimension by clicking on a slider to see specific insights."}
                    </p>
                    {selectedDimension !== null && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setSelectedDimension(null)}
                        className="flex items-center gap-1"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to overview
                      </Button>
                    )}
                  </div>
                  
                  {selectedDimension !== null ? (
                    <div className="p-4 border rounded-md bg-background">
                      <h4 className="font-semibold mb-2">{dimensions[selectedDimension].fullName}</h4>
                      <p className="mb-4">{dimensions[selectedDimension].insights[getDimensionLevel(dimensions[selectedDimension].value)]}</p>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className={cn("h-2 rounded-full bg-red-400", 
                          getDimensionLevel(dimensions[selectedDimension].value) === 'low' ? "opacity-100" : "opacity-30"
                        )} />
                        <div className={cn("h-2 rounded-full bg-yellow-400", 
                          getDimensionLevel(dimensions[selectedDimension].value) === 'medium' ? "opacity-100" : "opacity-30"
                        )} />
                        <div className={cn("h-2 rounded-full bg-green-400", 
                          getDimensionLevel(dimensions[selectedDimension].value) === 'high' ? "opacity-100" : "opacity-30"
                        )} />
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      {dimensions.map((dim, index) => (
                        <div 
                          key={dim.dimension}
                          className="p-4 border rounded-md bg-background cursor-pointer hover:border-primary transition-colors"
                          onClick={() => setSelectedDimension(index)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{dim.fullName}</h4>
                            <span className={cn(
                              "text-xs px-2 py-1 rounded-full",
                              getDimensionLevel(dim.value) === 'low' ? "bg-red-100 text-red-800" :
                              getDimensionLevel(dim.value) === 'medium' ? "bg-yellow-100 text-yellow-800" :
                              "bg-green-100 text-green-800"
                            )}>
                              {getDimensionLevel(dim.value)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">Click for insights</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {analysisTab === 'recommendations' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      {selectedDimension !== null ? 
                        `Recommendations for ${dimensions[selectedDimension].fullName}:` : 
                        "Select a dimension by clicking on a slider to see specific recommendations."}
                    </p>
                    {selectedDimension !== null && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setSelectedDimension(null)}
                        className="flex items-center gap-1"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to overview
                      </Button>
                    )}
                  </div>
                  
                  {selectedDimension !== null ? (
                    <div className="p-4 border rounded-md bg-background">
                      <h4 className="font-semibold mb-2">{dimensions[selectedDimension].fullName}</h4>
                      <p>{dimensions[selectedDimension].recommendations[getDimensionLevel(dimensions[selectedDimension].value)]}</p>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      {dimensions.map((dim, index) => (
                        <div 
                          key={dim.dimension}
                          className="p-4 border rounded-md bg-background cursor-pointer hover:border-primary transition-colors"
                          onClick={() => setSelectedDimension(index)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{dim.fullName}</h4>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">Click for recommendations</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {analysisTab === 'balance' && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Analysis of how your dimensions work together and potential imbalances:
                  </p>
                  {dimensionalBalance.map((balance, idx) => (
                    <div key={idx} className="p-4 border rounded-md bg-background">
                      <h4 className="font-semibold mb-2">{balance.label}</h4>
                      <p className="mb-2 text-muted-foreground">{balance.description}</p>
                      <div className="pt-2 border-t">
                        <h5 className="text-sm font-medium mb-1">Recommendation:</h5>
                        <p className="text-sm">{balance.recommendations}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpaceFramework;
