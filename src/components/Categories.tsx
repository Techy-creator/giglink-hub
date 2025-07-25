import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Paintbrush, 
  PenTool, 
  Camera, 
  Megaphone, 
  Music,
  Video,
  ShoppingBag
} from "lucide-react";

const serviceCategories = [
  { icon: Code, name: "Programming & Tech", count: "15,000+" },
  { icon: Paintbrush, name: "Graphic Design", count: "12,000+" },
  { icon: PenTool, name: "Writing & Translation", count: "8,000+" },
  { icon: Camera, name: "Photography", count: "6,000+" },
  { icon: Megaphone, name: "Digital Marketing", count: "10,000+" },
  { icon: Music, name: "Music & Audio", count: "4,000+" },
  { icon: Video, name: "Video & Animation", count: "7,000+" },
  { icon: ShoppingBag, name: "Business Services", count: "5,000+" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our most popular service categories and find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 bg-gradient-card border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.count} services
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-semibold">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;