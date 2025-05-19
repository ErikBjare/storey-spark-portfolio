
import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { publicationsData, Publication } from "@/data/publicationsData";
import { Search } from "lucide-react";

const PublicationExplorer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);

  // Simple fuzzy search implementation
  const filteredPublications = useMemo(() => {
    if (!searchQuery.trim()) return publicationsData;

    const query = searchQuery.toLowerCase();
    return publicationsData.filter(
      (pub) =>
        pub.title.toLowerCase().includes(query) ||
        pub.abstract.toLowerCase().includes(query) ||
        pub.authors.some((author) => author.toLowerCase().includes(query)) ||
        pub.keywords.some((keyword) => keyword.toLowerCase().includes(query)) ||
        pub.venue.toLowerCase().includes(query) ||
        pub.year.toString().includes(query)
    );
  }, [searchQuery]);

  return (
    <section id="publications" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Publications
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[700px]">
            Explore Prof. Storey's research publications and contributions to software engineering
          </p>
        </div>

        <div className="relative mb-6 max-w-md mx-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by title, author, keyword..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredPublications.length === 0 ? (
              <p className="text-center py-4">No publications found</p>
            ) : (
              filteredPublications.map((publication) => (
                <Card
                  key={publication.id}
                  className={`cursor-pointer transition-colors hover:bg-accent ${
                    selectedPublication?.id === publication.id
                      ? "border-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedPublication(publication)}
                >
                  <CardContent className="p-4">
                    <div className="mb-2 flex justify-between items-start">
                      <h3 className="font-medium text-sm line-clamp-2 text-left">
                        {publication.title}
                      </h3>
                      <span className="text-sm font-mono bg-muted px-1.5 rounded">
                        {publication.year}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground text-left line-clamp-1">
                      {publication.authors.join(", ")}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">{publication.venue}</span>
                      <span className="text-xs font-medium">Citations: {publication.citations}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                {selectedPublication ? (
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-left">{selectedPublication.title}</h3>
                    <p className="text-muted-foreground mb-4 text-left">{selectedPublication.authors.join(", ")}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-muted px-2 py-1 rounded text-xs">
                        {selectedPublication.year}
                      </span>
                      <span className="bg-muted px-2 py-1 rounded text-xs">
                        {selectedPublication.venue}
                      </span>
                      <span className="bg-muted px-2 py-1 rounded text-xs">
                        Citations: {selectedPublication.citations}
                      </span>
                    </div>
                    <div className="mb-4 text-left">
                      <h4 className="font-semibold mb-1">Abstract</h4>
                      <p className="text-sm">{selectedPublication.abstract}</p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold mb-1">Keywords</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedPublication.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Search className="h-12 w-12 mb-4" strokeOpacity={0.8} />
                    <p>Select a publication to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationExplorer;
