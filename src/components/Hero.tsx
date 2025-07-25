import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Services &
            <span className="block bg-gradient-to-r from-accent to-secondary-light bg-clip-text text-transparent">
              Buy Products
            </span>
            You Love
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Discover talented freelancers, unique products, and everything you need 
            to grow your business or find your next favorite item.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="What are you looking for?"
                className="pl-12 pr-4 h-14 text-lg bg-white/95 backdrop-blur border-0 shadow-lg"
              />
            </div>
            <Button 
              variant="hero" 
              size="xl"
              className="h-14 px-8 text-lg font-semibold"
            >
              Search
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold">2M+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <span className="font-semibold">500K+ Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold">4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;